import {
  ClipboardMinus,
  ChevronDown,
  LayoutDashboard,
  User,
  Globe,
  Text,
  MessageCircle,
  Handshake,
  Database,
} from "lucide-react";
import React from "react";

const SidebarCatagory = () => {
  return (
    <div className="flex flex-col  gap-2.5 text-[18px] py-4">
      <a className="px-3 py-2 flex gap-2 justify-between" href="/">
        <span className="flex gap-2.5">
          <LayoutDashboard /> Dashboard
        </span>
        <ChevronDown />
      </a>

      <a className="px-3 py-2 flex gap-2 justify-between" href="/">
        <span className="flex gap-2.5">
          <User /> Customers
        </span>
        <ChevronDown />
      </a>

      <a className="px-3 py-2 flex gap-2 justify-between" href="/">
        <span className="flex gap-2.5">
          <ClipboardMinus /> All reports
        </span>
        <ChevronDown />
      </a>

      <a className="px-3 py-2 flex gap-2 justify-between" href="/">
        <span className="flex gap-2.5">
          <Globe /> Geography
        </span>
        <ChevronDown />
      </a>

      <a className="px-3 py-2 flex gap-2 justify-between" href="/">
        <span className="flex gap-2.5">
          <MessageCircle /> Conversations
        </span>
        <ChevronDown />
      </a>

      <a className="px-3 py-2 flex gap-2 justify-between" href="/">
        <span className="flex gap-2.5">
          <Handshake /> Deals
        </span>
        <ChevronDown />
      </a>

      <a className="px-3 py-2 flex gap-2 justify-between" href="/">
        <span className="flex gap-2.5">
          <Database /> Export
        </span>
        <ChevronDown />
      </a>
    </div>
  );
};

export default SidebarCatagory;
