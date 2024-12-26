"use client"

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@shadcn/lib/utils"; // Utility function to merge classNames

const ShareSheet = () => {
  const [link, setLink] = React.useState("https://example.com"); // Link to share
  const socialMediaLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(link)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(link)}`,
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="p-2 bg-blue-500 text-white rounded-md">
          Share
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
        <Dialog.Content className="fixed z-50 bg-white p-6 rounded-lg shadow-lg max-w-md w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Dialog.Close className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Dialog.Close>

          <h2 className="text-xl font-semibold mb-4">Share this Link</h2>
          <div className="space-y-4">
            {/* Social Media Links */}
            <a href={socialMediaLinks.facebook} target="_blank" rel="noopener noreferrer">
              <div className="flex items-center space-x-2">
                <img src="/path/to/facebook-icon.png" alt="Facebook" className="h-6 w-6" />
                <span>Facebook</span>
              </div>
            </a>
            <a href={socialMediaLinks.twitter} target="_blank" rel="noopener noreferrer">
              <div className="flex items-center space-x-2">
                <img src="/path/to/twitter-icon.png" alt="Twitter" className="h-6 w-6" />
                <span>Twitter</span>
              </div>
            </a>
            <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <div className="flex items-center space-x-2">
                <img src="/path/to/linkedin-icon.png" alt="LinkedIn" className="h-6 w-6" />
                <span>LinkedIn</span>
              </div>
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ShareSheet;
