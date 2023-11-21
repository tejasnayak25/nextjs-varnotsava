import { NextRequest, NextResponse } from "next/server";
import { collection } from "@/lib/firebase-admin";
import { Registration } from "@/lib/models";
import { send } from '@/lib/sendmail';

let registration = collection(Registration);

export async function POST(req, res) {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
      }
      // not needed in NextJS v12+
    let data = await new Response(req.body).json();
    registration.doc(`${data.team_name}_${data.event}`).set({
        email: data.email,
        data: JSON.stringify(data),
        verified: "False"
    });

    await send(data.email, `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/css/bootstrap.min.css" integrity="sha512-Ez0cGzNzHR1tYAv56860NLspgUGuQw16GiOOp/I2LuTmpSK9xDXlgJz3XN4cnpXWDmkNBKXR/VDMTCnAaEooxA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <div class="w-100 d-flex justify-content-center bg-black text-white">
            <p class=" w-100 text-center p-5 bold">Varnotsava - 2K23</p>
            <p class=" mb-3">We have received a registration request for the ${data.event} event</p>
            <p class=" mb-6">Click the button below to confirm your registration</p>
            <a class=" btn btn-primary mb-6">Confirm Registration</a>
            <p class="text-muted">Powered by FeatureX</p>
        </div>
    `)
    
    return Response.json({data:"Confirmation mail has been sent to your email."});
}