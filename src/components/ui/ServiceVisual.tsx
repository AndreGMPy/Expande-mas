import type { Service } from "@/data/services";
import { ContentStudioVisual } from "@/components/service-visuals/ContentStudioVisual";
import { SocialCalendarVisual } from "@/components/service-visuals/SocialCalendarVisual";
import { MarketingAnalyticsVisual } from "@/components/service-visuals/MarketingAnalyticsVisual";
import { WebsiteResponsiveVisual } from "@/components/service-visuals/WebsiteResponsiveVisual";
import { AdminDashboardVisual } from "@/components/service-visuals/AdminDashboardVisual";
import { AIChatVisual } from "@/components/service-visuals/AIChatVisual";
import { AutomationFlowVisual } from "@/components/service-visuals/AutomationFlowVisual";
import { InfrastructureVisual } from "@/components/service-visuals/InfrastructureVisual";

export function ServiceVisual({ service }: { service: Service }) {
  switch (service.visual) {
    case "content-studio": return <ContentStudioVisual />;
    case "social-calendar": return <SocialCalendarVisual />;
    case "marketing-analytics": return <MarketingAnalyticsVisual />;
    case "website-responsive": return <WebsiteResponsiveVisual />;
    case "admin-dashboard": return <AdminDashboardVisual />;
    case "ai-chat": return <AIChatVisual />;
    case "automation-flow": return <AutomationFlowVisual />;
    case "infrastructure": return <InfrastructureVisual />;
  }
}
