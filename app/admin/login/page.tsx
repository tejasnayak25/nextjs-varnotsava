// pages/index.js or your component file
import dynamic from 'next/dynamic';

const DynamicLoginButton = dynamic(() => import('@/app/components/LoginButton'), {
    ssr: false,
});

export default function Login() {
    return (
        <div className="p-5 flex justify-center items-center">
            <DynamicLoginButton />
        </div>
    );
}
