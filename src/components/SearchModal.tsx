import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  FileText, 
  Users, 
  Beaker, 
  Building2, 
  ArrowRight,
  Filter,
  X
} from "lucide-react";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'guild' | 'lab' | 'page' | 'content';
  url: string;
  tags: string[];
  icon: React.ReactNode;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);

  // Comprehensive search data
  const searchData: SearchResult[] = [
    // Guilds
    {
      id: 'pfas-guild',
      title: 'PFAS & Emerging Contaminants Guild',
      description: 'Addressing forever chemicals and emerging water contaminants through collaborative research and policy development.',
      type: 'guild',
      url: '/guild/pfas',
      tags: ['PFAS', 'water quality', 'contaminants', 'research', 'policy'],
      icon: <Users className="h-4 w-4" />
    },
    {
      id: 'climate-guild',
      title: 'Climate & Resilience Guild',
      description: 'Building climate-resilient infrastructure and communities through data-driven solutions.',
      type: 'guild',
      url: '/guild/climate-resilience',
      tags: ['climate', 'resilience', 'infrastructure', 'adaptation', 'sustainability'],
      icon: <Users className="h-4 w-4" />
    },
    {
      id: 'finance-guild',
      title: 'Finance, Ratings & ROI Guild',
      description: 'Optimizing financial strategies and measuring return on investment for infrastructure projects.',
      type: 'guild',
      url: '/guild/finance-roi',
      tags: ['finance', 'ROI', 'investment', 'economics', 'funding'],
      icon: <Users className="h-4 w-4" />
    },
    {
      id: 'ai-guild',
      title: 'AI, Data Governance & Transparency Guild',
      description: 'Leveraging artificial intelligence while ensuring data privacy and transparent decision-making.',
      type: 'guild',
      url: '/guild/ai-data-governance',
      tags: ['AI', 'data governance', 'transparency', 'machine learning', 'privacy'],
      icon: <Users className="h-4 w-4" />
    },
    {
      id: 'stormwater-guild',
      title: 'Stormwater & Watershed Guild',
      description: 'Managing stormwater systems and watershed protection through innovative engineering solutions.',
      type: 'guild',
      url: '/guild/stormwater-watershed',
      tags: ['stormwater', 'watershed', 'water management', 'green infrastructure', 'flooding'],
      icon: <Users className="h-4 w-4" />
    },

    // Labs
    {
      id: 'biscayne-bay-gpt',
      title: 'Biscayne Bay GPT',
      description: 'AI-powered insights for Biscayne Bay ecosystem restoration and water quality management.',
      type: 'lab',
      url: '/biscayne-bay-gpt',
      tags: ['AI', 'ecosystem', 'water quality', 'Biscayne Bay', 'restoration'],
      icon: <Beaker className="h-4 w-4" />
    },
    {
      id: 'droobi-lab',
      title: 'Droobi Language Infrastructure Lab',
      description: 'The world\'s first living lab where language becomes infrastructure, standardizing technical terminology.',
      type: 'lab',
      url: '/droobi',
      tags: ['language', 'infrastructure', 'terminology', 'standardization', 'AI'],
      icon: <Beaker className="h-4 w-4" />
    },

    // Pages
    {
      id: 'about',
      title: 'About APAS Labs',
      description: 'Learn about our mission to revolutionize infrastructure through collaborative innovation.',
      type: 'page',
      url: '/about',
      tags: ['mission', 'vision', 'team', 'innovation', 'collaboration'],
      icon: <Building2 className="h-4 w-4" />
    },
    {
      id: 'community',
      title: 'Community',
      description: 'Join our vibrant community of infrastructure professionals, researchers, and innovators.',
      type: 'page',
      url: '/community',
      tags: ['community', 'networking', 'collaboration', 'membership'],
      icon: <Users className="h-4 w-4" />
    },
    {
      id: 'partnerships',
      title: 'Partnerships',
      description: 'Explore partnership opportunities and collaborate with leading organizations in infrastructure.',
      type: 'page',
      url: '/partnerships',
      tags: ['partnerships', 'collaboration', 'alliances', 'cooperation'],
      icon: <Building2 className="h-4 w-4" />
    },

    // Content topics
    {
      id: 'bioswales',
      title: 'Bioswales & Green Infrastructure',
      description: 'Learn about bioswales, rain gardens, and other green infrastructure solutions for stormwater management.',
      type: 'content',
      url: '/droobi',
      tags: ['bioswales', 'green infrastructure', 'stormwater', 'sustainability', 'urban planning'],
      icon: <FileText className="h-4 w-4" />
    },
    {
      id: 'water-treatment',
      title: 'Water Treatment Technologies',
      description: 'Explore advanced water treatment methods including activated sludge and membrane technologies.',
      type: 'content',
      url: '/droobi',
      tags: ['water treatment', 'activated sludge', 'membrane', 'wastewater', 'technology'],
      icon: <FileText className="h-4 w-4" />
    }
  ];

  const allTags = Array.from(new Set(searchData.flatMap(item => item.tags))).sort();

  useEffect(() => {
    if (!searchQuery && selectedTags.length === 0) {
      setFilteredResults(searchData);
      return;
    }

    const filtered = searchData.filter(item => {
      const matchesSearch = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTags = selectedTags.length === 0 ||
        selectedTags.every(tag => item.tags.includes(tag));

      return matchesSearch && matchesTags;
    });

    setFilteredResults(filtered);
  }, [searchQuery, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'guild': return 'bg-blue-500/10 text-blue-600 border-blue-200';
      case 'lab': return 'bg-green-500/10 text-green-600 border-green-200';
      case 'page': return 'bg-purple-500/10 text-purple-600 border-purple-200';
      case 'content': return 'bg-orange-500/10 text-orange-600 border-orange-200';
      default: return 'bg-gray-500/10 text-gray-600 border-gray-200';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search APAS Labs
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search guilds, labs, pages, and content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10"
            />
            {(searchQuery || selectedTags.length > 0) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-auto p-1"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Tag Filters */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Filter by tags:</span>
            </div>
            <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
              {allTags.map(tag => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary/10 transition-colors"
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="space-y-2 max-h-96 overflow-y-auto">
            <div className="text-sm text-muted-foreground mb-2">
              {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} found
            </div>
            
            {filteredResults.map(result => (
              <div
                key={result.id}
                className="p-4 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer group"
                onClick={() => {
                  window.location.href = result.url;
                  onClose();
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {result.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium group-hover:text-primary transition-colors">
                          {result.title}
                        </h3>
                        <Badge variant="outline" className={getTypeColor(result.type)}>
                          {result.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {result.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {result.tags.slice(0, 4).map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {result.tags.length > 4 && (
                          <Badge variant="secondary" className="text-xs">
                            +{result.tags.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                </div>
              </div>
            ))}

            {filteredResults.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>No results found for your search.</p>
                <p className="text-sm">Try different keywords or clear your filters.</p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;