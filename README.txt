FINCLARITY SOLUTIONS WEBSITE V6 — CRM LEAD INTEGRATION

This release preserves the V5 product/conversion design and connects the ERP Demo form directly to FinClarity Online ERP V16.8 CRM.

DEPLOYMENT ORDER
1. Run the ERP V16.8 Supabase migration first.
2. Verify the `finclarity-web-v6` route exists in `website_lead_routes`.
3. Deploy all Website V6 files together at the GitHub Pages publishing root.
4. Hard refresh the live site.
5. Submit one test demo request.
6. Confirm it appears in ERP → Sales → CRM & Pipeline as Source = Website — ERP Demo.

SECURITY
- The website contains only the Supabase publishable browser key, not a service-role or privileged key.
- Public submission is limited to one SECURITY DEFINER RPC with validation, a honeypot and basic per-contact throttling.
- The public website has no read access to CRM data.
