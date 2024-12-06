import { Facebook, Twitter, Send } from "lucide-react";

export function SocialIcons() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
      <a
        href="#"
        className="p-2 bg-black rounded-full text-white hover:bg-gray-800 transition-colors"
      >
        <Facebook size={20} />
      </a>
      <a
        href="#"
        className="p-2 bg-black rounded-full text-white hover:bg-gray-800 transition-colors"
      >
        <Send size={20} />
      </a>
      <a
        href="#"
        className="p-2 bg-black rounded-full text-white hover:bg-gray-800 transition-colors"
      >
        <Twitter size={20} />
      </a>
    </div>
  );
}
