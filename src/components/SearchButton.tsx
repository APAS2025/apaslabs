import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import SearchModal from "./SearchModal";

interface SearchButtonProps {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "default" | "lg";
  className?: string;
  showText?: boolean;
}

const SearchButton: React.FC<SearchButtonProps> = ({ 
  variant = "outline", 
  size = "sm",
  className = "",
  showText = true 
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Keyboard shortcut (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <Button 
        variant={variant}
        size={size}
        onClick={() => setIsSearchOpen(true)}
        className={`${className} hover:bg-primary/10`}
      >
        <Search className="h-4 w-4" />
        {showText && <span className="ml-2">Search</span>}
        {showText && (
          <span className="ml-2 text-xs text-muted-foreground hidden sm:inline">
            ⌘K
          </span>
        )}
      </Button>
      
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  );
};

export default SearchButton;