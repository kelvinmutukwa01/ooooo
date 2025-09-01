"use client"
import { X, Download } from "lucide-react"

interface DocumentViewerProps {
  isOpen: boolean
  onClose: () => void
  documentType: "cv" | "cover-letter"
}

export function DocumentViewer({ isOpen, onClose, documentType }: DocumentViewerProps) {
  if (!isOpen) return null

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = documentType === "cv" ? "/documents/kelvin-cv.png" : "/documents/kelvin-cover-letter.png"
    link.download = documentType === "cv" ? "Kelvin_Mutukwa_CV.png" : "Kelvin_Mutukwa_Cover_Letter.png"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-4 border-b bg-gray-50">
          <h3 className="text-xl font-bold text-gray-900">
            {documentType === "cv" ? "Kelvin Mutukwa - CV" : "Kelvin Mutukwa - Cover Letter"}
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Download size={16} />
              Download
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              aria-label="Close document viewer"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)] flex justify-center bg-gray-100">
          <img
            src={documentType === "cv" ? "/documents/kelvin-cv.png" : "/documents/kelvin-cover-letter.png"}
            alt={documentType === "cv" ? "Kelvin Mutukwa CV" : "Kelvin Mutukwa Cover Letter"}
            className="max-w-full h-auto rounded-lg shadow-lg bg-white"
          />
        </div>
      </div>
    </div>
  )
}
