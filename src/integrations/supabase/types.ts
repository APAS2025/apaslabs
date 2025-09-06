export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      bay_health_data: {
        Row: {
          color_class: string | null
          current_value: string
          description: string | null
          display_order: number | null
          id: string
          is_active: boolean | null
          last_updated: string
          metric_name: string
          trend_direction: string | null
        }
        Insert: {
          color_class?: string | null
          current_value: string
          description?: string | null
          display_order?: number | null
          id?: string
          is_active?: boolean | null
          last_updated?: string
          metric_name: string
          trend_direction?: string | null
        }
        Update: {
          color_class?: string | null
          current_value?: string
          description?: string | null
          display_order?: number | null
          id?: string
          is_active?: boolean | null
          last_updated?: string
          metric_name?: string
          trend_direction?: string | null
        }
        Relationships: []
      }
      biscayne_conversations: {
        Row: {
          ai_response: string
          conversation_context: Json | null
          created_at: string
          id: string
          question: string
          user_feedback: number | null
          user_session: string
        }
        Insert: {
          ai_response: string
          conversation_context?: Json | null
          created_at?: string
          id?: string
          question: string
          user_feedback?: number | null
          user_session: string
        }
        Update: {
          ai_response?: string
          conversation_context?: Json | null
          created_at?: string
          id?: string
          question?: string
          user_feedback?: number | null
          user_session?: string
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          category: string | null
          created_at: string
          email: string
          full_name: string
          id: string
          message: string
          organization: string | null
          phone: string | null
          status: string | null
          subject: string | null
          updated_at: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          email: string
          full_name: string
          id?: string
          message: string
          organization?: string | null
          phone?: string | null
          status?: string | null
          subject?: string | null
          updated_at?: string
        }
        Update: {
          category?: string | null
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          message?: string
          organization?: string | null
          phone?: string | null
          status?: string | null
          subject?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      content_blocks: {
        Row: {
          block_key: string
          block_type: string
          content: string
          created_at: string
          description: string | null
          id: string
          is_active: boolean | null
          page_name: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          block_key: string
          block_type: string
          content: string
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          page_name: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          block_key?: string
          block_type?: string
          content?: string
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          page_name?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      donations: {
        Row: {
          amount: number
          created_at: string
          donor_email: string
          donor_name: string | null
          id: string
          message: string | null
          payment_id: string | null
          payment_status: string | null
          tier_name: string
        }
        Insert: {
          amount: number
          created_at?: string
          donor_email: string
          donor_name?: string | null
          id?: string
          message?: string | null
          payment_id?: string | null
          payment_status?: string | null
          tier_name: string
        }
        Update: {
          amount?: number
          created_at?: string
          donor_email?: string
          donor_name?: string | null
          id?: string
          message?: string | null
          payment_id?: string | null
          payment_status?: string | null
          tier_name?: string
        }
        Relationships: []
      }
      partnership_inquiries: {
        Row: {
          contact_name: string
          created_at: string
          email: string
          id: string
          organization: string
          partnership_type: string
          phone: string | null
          project_description: string
          status: string | null
          timeline: string | null
          updated_at: string
        }
        Insert: {
          contact_name: string
          created_at?: string
          email: string
          id?: string
          organization: string
          partnership_type: string
          phone?: string | null
          project_description: string
          status?: string | null
          timeline?: string | null
          updated_at?: string
        }
        Update: {
          contact_name?: string
          created_at?: string
          email?: string
          id?: string
          organization?: string
          partnership_type?: string
          phone?: string | null
          project_description?: string
          status?: string | null
          timeline?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          role: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          role?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          role?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      site_metrics: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          display_order: number | null
          id: string
          is_active: boolean | null
          key: string
          label: string
          updated_at: string
          updated_by: string | null
          value: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          display_order?: number | null
          id?: string
          is_active?: boolean | null
          key: string
          label: string
          updated_at?: string
          updated_by?: string | null
          value: string
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          display_order?: number | null
          id?: string
          is_active?: boolean | null
          key?: string
          label?: string
          updated_at?: string
          updated_by?: string | null
          value?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
