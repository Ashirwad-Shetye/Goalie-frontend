import React from "react";

interface Props {
  open: boolean;
  onClose: any;
  children: any;
}

function PostFormModal({ open, children }: Props) {
  if (!open) return null;

  return (
    <div className="bg-white relative z-50 rounded-2xl mb-8 md:mb-0 shadow-xl min-h-fit max-h-[650px] w-72 min-w-fit">
      {children}
    </div>
  );
}

export default PostFormModal;
