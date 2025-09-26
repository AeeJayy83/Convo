import { useChatStore } from "../store/useChatStore.js";
import { useAuthStore } from "../store/useAuthStore.js";
import { X } from "lucide-react";

const ChatHeader = () => {
    const {selectedUser, setSelectedUser } = useChatStore();
    const { onlineUsers } = useAuthStore();

    return (
        <div className="p-2.5 border-b border-base-300">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">

                    <div className="avatar">
                        <div className="size-10 rounded-full relative">
                            <img src={selectedUser.profilePic || "/user.png"} alt={selectedUser.fullName} />
                        </div>
                    </div>

                    <div>
                        <h3 className="font-medium">{selectedUser.fullName}</h3>
                        <p className="text-sm text-base-content/70">
                        {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}</p>
                    </div>

                </div>

                <button onClick={() => setSelectedUser(null)} className="hover:bg-primary/20 rounded-full size-8 transition-colors duration-100">
                    <X className="ml-1"/>
                </button>
            </div>
        </div>
    )
}

export default ChatHeader;