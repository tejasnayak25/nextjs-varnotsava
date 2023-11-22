export function Registration () {
    this.name = "registration";
    this.fields = {
        email: { type: "string" },
        data: { type: "string" }
    }
}

export function QRCodes () {
    this.name = "qrcodes";
    this.fields = {
        url: {type: "string"}
    }
}