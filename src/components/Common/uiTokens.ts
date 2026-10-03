export const UI = {
  // Global Layout System
  // Container max-width 1200px, side padding 20px mobile / 32px tablet / 48px desktop
  container: 'w-full max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12',
  
  // Section Spacing: pt-20 pb-20 on mobile, pt-24 pb-24 on tablet (sm), pt-28 pb-28 on desktop (lg)
  section: 'relative w-full pt-20 pb-20 sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28 overflow-hidden flex flex-col items-center justify-center',

  // Typography Rhythm
  typography: {
    sectionHeadingSpacing: 'mb-12 lg:mb-16',
    titleToSubtitle: 'mt-3',
    subtitleToContent: 'mt-6',
  },

  // Button Design System
  // Primary buttons: dark #1F1B17 in light, vibrant MongoDB #00ED64 in dark mode
  button: {
    primary:
      'inline-flex items-center justify-center gap-2.5 h-[48px] sm:h-[52px] px-6 sm:px-7 rounded-xl font-bold text-sm tracking-wide text-[#F6EFE2] bg-[#1F1B17] hover:bg-[#2B2621] border border-[#1F1B17] dark:bg-[#00ED64] dark:text-[#001E2B] dark:border-[#00ED64] dark:hover:bg-[#00C853] dark:shadow-[0_4px_20px_rgba(0,237,100,0.25)] transition-all duration-250 cursor-pointer shadow-md select-none',
    secondary:
      'inline-flex items-center justify-center gap-2.5 h-[48px] sm:h-[52px] px-6 sm:px-7 rounded-xl font-bold text-sm tracking-wide text-[#1F1B17] hover:text-[#1F1B17] bg-[#D9CCB4] hover:bg-[#DDD0B8] border border-[#BFB195] dark:bg-[#0C2331] dark:text-[#F9FBFA] dark:hover:text-[#F9FBFA] dark:border-[#1E3A4B] dark:hover:bg-[#112D3E] transition-all duration-250 cursor-pointer shadow-sm select-none',
    tab:
      'inline-flex items-center gap-2.5 h-[44px] sm:h-[48px] px-5 sm:px-6 rounded-xl text-xs sm:text-sm font-semibold dark:text-[#C1C7C6] dark:hover:text-[#F9FBFA] transition-all duration-250 cursor-pointer select-none',
  },

  // Form Input System
  input: {
    field:
      'w-full h-[52px] sm:h-[54px] px-5 rounded-xl bg-[#F6F0E2] border border-[#BFB195] hover:border-[#8C5E34] text-[#1F1B17] placeholder:text-[#5E5547] dark:bg-[#041219] dark:border-[#1E3A4B] dark:hover:border-[#00ED64]/60 dark:text-[#F9FBFA] dark:placeholder:text-[#889397] dark:focus:border-[#00ED64] dark:focus:ring-[#00ED64]/20 text-sm outline-none focus:border-[#8C5E34] focus:ring-2 focus:ring-[#8C5E34]/25 transition-all duration-200 font-["Roboto",sans-serif]',
    select:
      'w-full h-[52px] sm:h-[54px] pl-5 pr-11 rounded-xl bg-[#F6F0E2] border border-[#BFB195] hover:border-[#8C5E34] text-[#1F1B17] dark:bg-[#041219] dark:border-[#1E3A4B] dark:hover:border-[#00ED64]/60 dark:text-[#F9FBFA] dark:focus:border-[#00ED64] dark:focus:ring-[#00ED64]/20 text-sm outline-none focus:border-[#8C5E34] focus:ring-2 focus:ring-[#8C5E34]/25 transition-all duration-200 appearance-none cursor-pointer font-["Roboto",sans-serif]',
    textarea:
      'w-full min-h-[160px] p-5 rounded-xl bg-[#F6F0E2] border border-[#BFB195] hover:border-[#8C5E34] text-[#1F1B17] placeholder:text-[#5E5547] dark:bg-[#041219] dark:border-[#1E3A4B] dark:hover:border-[#00ED64]/60 dark:text-[#F9FBFA] dark:placeholder:text-[#889397] dark:focus:border-[#00ED64] dark:focus:ring-[#00ED64]/20 text-sm outline-none focus:border-[#8C5E34] focus:ring-2 focus:ring-[#8C5E34]/25 transition-all duration-200 resize-none leading-relaxed font-["Roboto",sans-serif]',
    label:
      'block text-xs font-mono font-bold text-[#1F1B17] dark:text-[#F9FBFA] uppercase tracking-wider mb-2',
    group:
      'flex flex-col gap-2',
  },

  // Card Base
  card: {
    light:
      'rounded-2xl bg-[#D9CCB4] border border-[rgba(31,27,23,0.14)] dark:bg-[#0C2331] dark:border-[rgba(255,255,255,0.08)] shadow-[0_10px_28px_rgba(60,45,25,0.18),0_2px_6px_rgba(60,45,25,0.10)] hover:shadow-[0_14px_36px_rgba(60,45,25,0.26),0_3px_8px_rgba(60,45,25,0.12)] dark:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.65)] dark:hover:shadow-[0_18px_40px_-5px_rgba(0,0,0,0.80)] transition-all duration-250 relative overflow-hidden p-6 sm:p-7 lg:p-8',
    dark:
      'rounded-2xl border border-[rgba(243,234,217,0.12)] dark:border-[rgba(255,255,255,0.08)] shadow-[0_14px_36px_rgba(20,15,10,0.40)] dark:shadow-[0_18px_44px_rgba(0,0,0,0.75)] transition-all duration-250 relative overflow-hidden p-6 sm:p-7 lg:p-8',
  },

  // Grid Spacing System
  grid: {
    base: 'gap-6 sm:gap-7 lg:gap-8',
  },
};
