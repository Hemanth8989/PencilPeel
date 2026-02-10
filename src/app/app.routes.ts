import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Digitalmarketing } from './pages/digitalmarketing/digitalmarketing';
import { Seo } from './pages/digitalmarketing/seo/seo';
import { Sem } from './pages/digitalmarketing/sem/sem';
import { Podcastmarketing } from './pages/digitalmarketing/podcastmarketing/podcastmarketing';
import { Smo } from './pages/digitalmarketing/smo/smo';
import { Reviewmarketing } from './pages/digitalmarketing/reviewmarketing/reviewmarketing';
import { Ppc } from './pages/digitalmarketing/ppc/ppc';
import { Linkbuilding } from './pages/digitalmarketing/linkbuilding/linkbuilding';
import { Leadgen } from './pages/digitalmarketing/leadgen/leadgen';
import { Influencer } from './pages/digitalmarketing/influencer/influencer';
import { Googleads } from './pages/digitalmarketing/googleads/googleads';
import { Growthmarketing } from './pages/digitalmarketing/growthmarketing/growthmarketing';
import { Inbound } from './pages/digitalmarketing/inbound/inbound';
import { Emailmarketing } from './pages/digitalmarketing/emailmarketing/emailmarketing';
import { Ecommercemarketing } from './pages/digitalmarketing/ecommercemarketing/ecommercemarketing';
import { Displaymarketing } from './pages/digitalmarketing/displaymarketing/displaymarketing';
import { Cro } from './pages/digitalmarketing/cro/cro';
import { Content } from './pages/digitalmarketing/content/content';
import { Brandmanagment } from './pages/digitalmarketing/brandmanagment/brandmanagment';
import { Brandadvertising } from './pages/digitalmarketing/brandadvertising/brandadvertising';
import { Aiintegrations } from './pages/digitalmarketing/aiintegrations/aiintegrations';
import { Affiliatemarketing } from './pages/digitalmarketing/affiliatemarketing/affiliatemarketing';
import { Analytics } from './pages/digitalmarketing/analytics/analytics';
import { Socialmarketing } from './pages/socialmarketing/socialmarketing';
import { Facebook } from './pages/socialmarketing/facebook/facebook';
import { Whatsapp } from './pages/socialmarketing/whatsapp/whatsapp';
import { Youtube } from './pages/socialmarketing/youtube/youtube';
import { Twitter } from './pages/socialmarketing/twitter/twitter';
import { Snapchat } from './pages/socialmarketing/snapchat/snapchat';
import { Inapp } from './pages/socialmarketing/inapp/inapp';
import { Instagram } from './pages/socialmarketing/instagram/instagram';
import { Linkedln } from './pages/socialmarketing/linkedln/linkedln';
import { Filmpromo } from './pages/filmpromo/filmpromo';
import { AiTechnology } from './pages/ai-technology/ai-technology';
import { Aicustsupport } from './pages/ai-technology/aicustsupport/aicustsupport';
import { Aivideomaking } from './pages/ai-technology/aivideomaking/aivideomaking';
import { Aireceptionist } from './pages/ai-technology/aireceptionist/aireceptionist';
import { Aiinnovation } from './pages/ai-technology/aiinnovation/aiinnovation';
import { Aigenerators } from './pages/ai-technology/aigenerators/aigenerators';
import { Aisoftware } from './pages/ai-technology/aisoftware/aisoftware';
import { Softwaredevelopment } from './pages/softwaredevelopment/softwaredevelopment';
import { Development } from './pages/softwaredevelopment/development/development';
import { Web } from './pages/softwaredevelopment/web/web';
import { App } from './pages/softwaredevelopment/app/app';
import { Outdooradvertising } from './outdooradvertising/outdooradvertising';
import { Billboard } from './outdooradvertising/pages/billboard/billboard';
import { Hoarding } from './outdooradvertising/pages/hoarding/hoarding';
import { Busshelter } from './outdooradvertising/pages/busshelter/busshelter';
import { Malldisplay } from './outdooradvertising/pages/malldisplay/malldisplay';
import { Airport } from './outdooradvertising/pages/airport/airport';
import { Car } from './outdooradvertising/pages/car/car';
import { Outdooradvertising1 } from './outdooradvertising/outdooradvertising1/outdooradvertising1';
import { ProjectionMappingAdvertising } from './outdooradvertising/pages/projection-mapping-advertising/projection-mapping-advertising';
import { FloorGraphicsAdvertising } from './outdooradvertising/pages/floor-graphics-advertising/floor-graphics-advertising';
import { GurillaAdvertising } from './outdooradvertising/pages/gurilla-advertising/gurilla-advertising';
import { ARAdvertising } from './outdooradvertising/pages/aradvertising/aradvertising';
import { StreetFurnitureAdvertising } from './outdooradvertising/pages/street-furniture-advertising/street-furniture-advertising';
import { InteractiveDisplayAdvertising } from './outdooradvertising/pages/interactive-display-advertising/interactive-display-advertising';
import { HighwayHotelAdvertising } from './outdooradvertising/pages/highway-hotel-advertising/highway-hotel-advertising';
import { HighwayBrandActivation } from './outdooradvertising/pages/highway-brand-activation/highway-brand-activation';
import { AircraftExteriorAdvertising } from './outdooradvertising/pages/aircraft-exterior-advertising/aircraft-exterior-advertising';
import { WindowsClingAdvertising } from './outdooradvertising/pages/windows-cling-advertising/windows-cling-advertising';
import { WallsWrapAdvertising } from './outdooradvertising/pages/walls-wrap-advertising/walls-wrap-advertising';
import { Gymadvertising } from './outdooradvertising/pages/gymadvertising/gymadvertising';
import { Retailadvertising } from './outdooradvertising/pages/retailadvertising/retailadvertising';
import { Scrollbillboardadvertising } from './outdooradvertising/pages/scrollbillboardadvertising/scrollbillboardadvertising';
import { Mobilebillboardadvertising } from './outdooradvertising/pages/mobilebillboardadvertising/mobilebillboardadvertising';
import { Threedadvertising } from './outdooradvertising/pages/threedadvertising/threedadvertising';
import { MultiplexAdvertising } from './outdooradvertising/pages/multiplex-advertising/multiplex-advertising';
import { TransistAdvertising } from './outdooradvertising/pages/transist-advertising/transist-advertising';
import { InflatableAdvertising } from './outdooradvertising/pages/inflatable-advertising/inflatable-advertising';
import { ProjectionAdvertising } from './outdooradvertising/pages/projection-advertising/projection-advertising';
import { CutoutAdvertising } from './outdooradvertising/pages/cutout-advertising/cutout-advertising';
import { AutoAdvertising } from './outdooradvertising/pages/auto-advertising/auto-advertising';
import { Inflightbranding } from './outdooradvertising/pages/inflightbranding/inflightbranding';
import { Ourservices } from './pages/ourservices/ourservices';
import { Adfilms } from './pages/ourservices/adfilms/adfilms';
import { About } from './pages/about/about';
import { PersonalBranding } from './pages/ourservices/personal-branding/personal-branding';
import { Videomarketing } from './pages/ourservices/videomarketing/videomarketing';
import { VideoProduction } from './pages/ourservices/video-production/video-production';
import { TelecallerMarketing } from './pages/ourservices/telecaller-marketing/telecaller-marketing';
import { DesignThinking } from './pages/ourservices/design-thinking/design-thinking';
import { BrandAdvertising } from './pages/ourservices/brand-advertising/brand-advertising';
import { BrandAmbassador } from './pages/ourservices/brand-ambassador/brand-ambassador';
import { LeadGen } from './pages/ourservices/lead-gen/lead-gen';
import { Pro } from './pages/ourservices/pro/pro';
import { EventManagement } from './pages/ourservices/event-management/event-management';
import { ItConsulting } from './pages/it-consulting/it-consulting';
import { Metropillaradvertising } from './outdooradvertising/pages/metropillaradvertising/metropillaradvertising';
import { Humanbillboardadvertising } from './outdooradvertising/pages/humanbillboardadvertising/humanbillboardadvertising';
import { Metrotrainadvertising } from './outdooradvertising/pages/metrotrainadvertising/metrotrainadvertising';
import { CyberSecurity } from './pages/cyber-security/cyber-security';
import { Payroll } from './pages/payroll/payroll';
import { ContactForm } from './components/contact-form/contact-form';
import { BlogList } from './components/blog/blog-list/blog-list';
import { BlogDetail } from './components/blog/blog-detail/blog-detail';
import { Aieducation } from './pages/ai-technology/aieducation/aieducation';
import { AiTraining } from './pages/ai-technology/ai-training/ai-training';
import { Government } from './pages/ai-technology/government/government';
import { Aisectors } from './pages/ai-technology/aisectors/aisectors';
import { AiPoweredAdfilms } from './pages/ourservices/ai-powered-adfilms/ai-powered-adfilms';
import { AiHealthCare } from './pages/ai-technology/ai-health-care/ai-health-care';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    //{path: 'home',component: Homenew},
    //{path: 'home',component: Home1},
    {path: 'home',component: Home},
    { path: 'digitalmarketing', component: Digitalmarketing},
    { path: 'digitalmarketing/affiliatemarketing', component: Affiliatemarketing },
    { path: 'digitalmarketing/aiintegrations', component: Aiintegrations },
    { path: 'digitalmarketing/analytics', component: Analytics },
    { path: 'digitalmarketing/brandadvertising', component: Brandadvertising },
    { path: 'digitalmarketing/brandmanagment', component: Brandmanagment },
    { path: 'digitalmarketing/contentmarketing', component: Content },
    { path: 'digitalmarketing/contentrateoptimization', component: Cro },
    { path: 'digitalmarketing/displaymarketing', component: Displaymarketing },
    { path: 'digitalmarketing/ecommercemarketing', component: Ecommercemarketing },
    { path: 'digitalmarketing/emailmarketing', component: Emailmarketing },
    { path: 'digitalmarketing/googleads', component: Googleads },
    { path: 'digitalmarketing/growthmarketing', component: Growthmarketing },
    { path: 'digitalmarketing/inbound', component: Inbound },
    { path: 'digitalmarketing/influencer', component: Influencer },
    { path: 'digitalmarketing/leadgeneration', component: Leadgen },
    { path: 'digitalmarketing/linkbuilding', component: Linkbuilding },
    { path: 'digitalmarketing/ppc', component: Ppc },
    { path: 'digitalmarketing/reviewmarketing', component: Reviewmarketing },
    { path: 'digitalmarketing/podcastmarketing', component: Podcastmarketing },
    { path: 'digitalmarketing/seo', component: Seo },
    { path: 'digitalmarketing/sem', component: Sem },
    { path: 'digitalmarketing/smo', component: Smo },
    { path: 'socialmediamarketing', component: Socialmarketing},
    { path: 'socialmediamarketing/facebook', component: Facebook},
    { path: 'socialmediamarketing/whatsapp', component: Whatsapp},
    { path: 'socialmediamarketing/youtube', component: Youtube},
    { path: 'socialmediamarketing/twitter', component: Twitter},
    { path: 'socialmediamarketing/snapchat', component: Snapchat},
    { path: 'socialmediamarketing/inapp', component: Inapp},
    { path: 'socialmediamarketing/instagram', component: Instagram},
    { path: 'socialmediamarketing/linkedln', component: Linkedln},
     {path: 'filmmarketing',component: Filmpromo},
     {path: 'aitechnology',component: AiTechnology},
     {path: 'aitechnology/aicustomersupport',component: Aicustsupport},
     {path: 'aitechnology/aileadgeneration',component: Aigenerators},
     {path: 'aitechnology/aiinnovations',component: Aiinnovation},
     {path: 'aitechnology/aireceptionist',component: Aireceptionist},
     {path: 'aitechnology/aivideomaking',component: Aivideomaking},
     {path: 'aitechnology/aisoftware', component: Aisoftware},
     {path: 'aitechnology/aieducation', component: Aieducation},
     {path: 'aitechnology/aitraining', component: AiTraining},
     {path: 'aitechnology/government', component:Government},
     {path: 'aitechnology/aisectors', component:Aisectors},
     {path: 'aitechnology/aihealthcare', component: AiHealthCare},
     {path: 'software', component: Softwaredevelopment},
     {path: 'softwaredevelopment', component: Development},
     {path: 'websitedevelopment', component: Web},
     {path: 'appdevelopment', component: App},
     {path: 'outdooradvertising', component: Outdooradvertising1},
     {path: 'aboutus', component: About},
     { path: 'itconsulting',component:ItConsulting},
     { path: 'cybersecurity', component: CyberSecurity },
     { path: 'payroll', component: Payroll },
       { path: 'contact', component: ContactForm },
  {
    path: 'billboard-advertising',
    component: Billboard,
    title: 'Billboard Advertising Services | Pencil Peel'
  },
  {
    path: 'hoarding-advertising',
    component: Hoarding,
    title: 'Hoarding Advertising Services | Pencil Peel'
  },
  {
    path: 'busshelter-advertising',
    component: Busshelter,
    title: 'BusShelter Advertising Services | Pencil Peel'
  },
  {
    path: 'malldisplay-advertising',
    component: Malldisplay,
    title: 'mall Advertising Services | Pencil Peel'
  },
  {
    path: 'airport-advertising',
    component: Airport,
    title: 'Airport Advertising Services | Pencil Peel'
  },
  {
    path: 'car-advertising',
    component: Car,
    title: 'Car Advertising Services | Pencil Peel'
  },

  // Advertising Services Routes
  {
    path: 'projection-mapping-advertising',
    component: ProjectionMappingAdvertising,
    title: 'projection mapping advertising services| Pencil Peel'
  },
  {
    path: 'floor-graphics-advertising',
    component: FloorGraphicsAdvertising,
    title: 'floor graphics advertising services| Pencil Peel'
  },
  {
    path: 'guerrilla-advertising',
    component: GurillaAdvertising,
    title: 'guerrilla advertising services| Pencil Peel'
  },
  {
    path: 'AR-advertising',
    component: ARAdvertising,
    title: 'AR advertising services| Pencil Peel'
  },
  { 
    path: 'street-furniture-advertising', 
    component: StreetFurnitureAdvertising,
    title: 'street furniture advertising| Pencil Peel'
  },
  { 
    path: 'interactive-display-advertising', 
    component: InteractiveDisplayAdvertising,
    title: 'street furniture advertising| Pencil Peel'
  },
  { 
    path: 'highway-hotel-advertising', 
    component: HighwayHotelAdvertising,
    title: 'street furniture advertising| Pencil Peel'
  },
  { 
    path: 'highway-brand-activation-advertising', 
    component: HighwayBrandActivation,
    title: 'highway brand activation advertising | Pencil Peel'
  },
  { 
    path: 'aircraft-exterior-branding', 
    component: AircraftExteriorAdvertising,
    title: 'aircraft exterior branding services | Pencil Peel'
  },
  { 
    path: 'Window-Clings-advertising', 
    component: WindowsClingAdvertising,
    title: 'Window Clings Advertising | Pencil Peel'
  },
  { 
    path: 'wall-wraps-advertising', 
    component: WallsWrapAdvertising,
    title: 'Wall Wraps Advertising | Pencil Peel'
  },
  { 
    path: 'wall-wraps-advertising', 
    component: WallsWrapAdvertising,
    title: 'Wall Wraps Advertising | Pencil Peel'
  },
  { path: 'inflight-advertising', component: Inflightbranding },
  {path: 'metropillar-advertising', component: Metropillaradvertising},
  {path: 'metrotrain-advertising', component: Metrotrainadvertising},
  {path: 'human-walking-billboard', component: Humanbillboardadvertising},
  { path: 'gym-advertising', component: Gymadvertising },
  { path: 'retail-advertising', component: Retailadvertising },
  { path: 'scrolling-billboard-advertising', component: Scrollbillboardadvertising },
  { path: 'mobile-billboard-advertising', component: Mobilebillboardadvertising },
  { path: '3d-advertising', component: Threedadvertising },
  { path: 'multiplex-advertising', component: MultiplexAdvertising },
  { path: 'transit-advertising', component: TransistAdvertising },
  { path: 'inflatable-advertising', component: InflatableAdvertising },
  { path: 'projection-advertising', component: ProjectionAdvertising },
  { path: 'cutout-advertising', component: CutoutAdvertising },
  { path: 'auto-advertising', component: AutoAdvertising },
  { path: 'services', component: Ourservices},
  { path: 'services/ad-films',component:Adfilms},
  { path: 'services/personal-branding',component:PersonalBranding},
  { path: 'services/video-marketing',component:Videomarketing},
  { path: 'services/video-production',component:VideoProduction},
  { path: 'services/telecallers',component:TelecallerMarketing},
  { path: 'services/design-thinking',component:DesignThinking},
  { path: 'services/brand-advertising',component:BrandAdvertising},
  { path: 'services/brand-ambassador', component: BrandAmbassador},
  { path: 'services/lead-generation',component: LeadGen},
  { path: 'services/pro', component: Pro},
  { path: 'services/event-management', component:EventManagement},
  { path: 'services/ai-powered-ad-films', component: AiPoweredAdfilms},
  { path: 'blog', component: BlogList},
  { path: 'blog/:id', component: BlogDetail}
];
