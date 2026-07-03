import { readFile } from "fs/promises";
import path from "path";

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
    const pdfPath = path.join(process.cwd(), "public", "Devadripta_Jadhav_CV.pdf");
    const pdfBuffer = await readFile(pdfPath);

    return new NextResponse(pdfBuffer, {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": 'inline; filename="Devadripta_Jadhav_CV.pdf"',
            "Cache-Control": "no-store, max-age=0, must-revalidate",
            "Content-Length": pdfBuffer.byteLength.toString(),
        },
    });
}