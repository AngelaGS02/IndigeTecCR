// Create a new function to generate a PDF report using the pdf-lib library and download it

import { PDFDocument } from 'pdf-lib';

export async function generatePDFReport(data: any) {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    page.drawText(JSON.stringify(data));
    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
}