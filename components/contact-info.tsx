"use client"

import { Mail, Phone, MapPin } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center sm:text-left">
        <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Get In Touch</h3>
        <p className="text-primary/80 text-base sm:text-lg">
          Ready to bring your ideas to life? Let's discuss your next project.
        </p>
      </div>

      <div className="space-y-4 sm:space-y-6">
        <div className="flex items-center space-x-4 p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-primary/70">Email</p>
            <a
              href="mailto:kelvinmutukwa30@gmail.com"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              kelvinmutukwa30@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-primary/70">Phone</p>
            <a href="tel:+263713882084" className="text-primary hover:text-primary/80 transition-colors font-medium">
              +263 71 388 2084
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-primary/70">Location</p>
            <p className="text-primary font-medium">Warren Park 1, Harare, Zimbabwe</p>
          </div>
        </div>
      </div>
    </div>
  )
}
