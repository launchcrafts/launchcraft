import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/logo-file-formats`;

export const metadata: Metadata = {
  title: "Logo File Formats Explained: SVG, PNG, Favicon and When to Use Each",
  description: "Got your logo but not sure which file goes where? Here's what SVG, PNG, JPG, PDF and favicon files are for, and the full set every brand should keep.",
  keywords: ["logo file formats", "svg vs png logo", "favicon sizes", "logo files for website"],
  alternates: { canonical: url },
  openGraph: {
    title: "Logo File Formats Explained: SVG, PNG, Favicon and When to Use Each | LaunchCraft",
    description: "Got your logo but not sure which file goes where? Here's what SVG, PNG, JPG, PDF and favicon files are for, and the full set every brand should keep.",
    url,
    type: "article",
    publishedTime: "2026-11-17",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Logo File Formats Explained: SVG, PNG, Favicon and When to Use Each",
    description: "Got your logo but not sure which file goes where? Here's what SVG, PNG, JPG, PDF and favicon files are for, and the full set every brand should keep.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "Logo File Formats Explained: SVG, PNG, Favicon and When to Use Each", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Logo File Formats Explained: SVG, PNG, Favicon and When to Use Each",
  description: "Got your logo but not sure which file goes where? Here's what SVG, PNG, JPG, PDF and favicon files are for, and the full set every brand should keep.",
  datePublished: "2026-11-17",
  dateModified: "2026-11-17",
  mainEntityOfPage: { "@type": "WebPage", "@id": url },
  author: { "@type": "Organization", name: "LaunchCraft", url: baseUrl },
  publisher: {
    "@type": "Organization",
    name: "LaunchCraft",
    url: baseUrl,
    logo: { "@type": "ImageObject", url: `${baseUrl}/assets/logo.PNG` },
  },
  inLanguage: "en",
};

const sans = { fontFamily: "var(--font-secondary)" } as const;

export default function BlogPost() {
  return (
    <main className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      {/* Header */}
      <section className="py-20 px-6 text-center border-b border-hairline">
        <FadeIn>
          <Link href="/blog" className="inline-block text-[10px] tracking-[0.2em] uppercase text-muted hover:text-brand-orange transition-colors duration-300 mb-8" style={sans}>&larr; Blog</Link>
          <div className="flex items-center justify-center gap-3 flex-wrap mb-4">
            <span className="text-[10px] tracking-[0.2em] uppercase text-muted" style={sans}>17 November 2026</span>
            <span className="text-hairline">&middot;</span>
            {["Branding", "Design"].map((tag) => (
              <span key={tag} className="text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 border border-hairline text-muted" style={sans}>{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl italic text-foreground max-w-3xl mx-auto leading-[1.2]">Logo File Formats Explained: SVG, PNG, Favicon and When to Use Each</h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            You have a logo. The designer sent you a folder of files with unfamiliar extensions and you are not entirely sure which one goes where. This situation is extremely common and entirely fixable. Understanding logo file formats takes about ten minutes and prevents the kind of mistakes — a blurry logo on your website header, a pixelated logo on a business card, a missing favicon — that make a brand look unprofessional.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            This guide covers the main formats, when to use each, what a complete logo kit should contain, how to set up favicons correctly in a Next.js project, and the most common file format mistakes to avoid. If you are still creating your logo, the <Link href="/logo-maker" className="text-brand-green hover:underline">LaunchCraft AI logo maker</Link> generates a full kit in multiple formats automatically.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Vector vs Raster: The Fundamental Distinction</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            All logo files fall into one of two categories, and understanding this distinction makes every format decision easier.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            A <strong>vector</strong> file stores your logo as a set of mathematical instructions — curves, lines, shapes and their coordinates. Because the instructions are mathematical rather than pixel-based, the logo can be rendered at any size without quality loss. A vector logo printed at 10 centimetres looks identical to the same logo printed at 10 metres. SVG and AI (Adobe Illustrator) are vector formats.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            A <strong>raster</strong> file stores your logo as a grid of individual pixels. Each pixel has a fixed colour value. When you scale a raster file up beyond its original dimensions, the software has to invent new pixels, which causes blurring and pixelation. PNG, JPG and WebP are raster formats. For logos, raster files should be used at or below the resolution at which they were created — never above.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            The practical rule is: use vector formats whenever possible. Export raster formats from vector originals at the exact dimensions needed for each use case. Never scale a raster logo up.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Format Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-muted border-collapse" style={sans}>
              <thead>
                <tr className="border-b border-hairline">
                  <th className="text-left py-2 pr-4 text-foreground font-normal italic">Format</th>
                  <th className="text-left py-2 pr-4 text-foreground font-normal italic">Type</th>
                  <th className="text-left py-2 pr-4 text-foreground font-normal italic">Transparency</th>
                  <th className="text-left py-2 text-foreground font-normal italic">Best Used For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 font-medium text-foreground">SVG</td>
                  <td className="py-2 pr-4">Vector</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">Website header, inline web use, any scalable digital context</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 font-medium text-foreground">PNG</td>
                  <td className="py-2 pr-4">Raster</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">Social media profiles, email signatures, documents, digital use at fixed size</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 font-medium text-foreground">JPG / JPEG</td>
                  <td className="py-2 pr-4">Raster</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">Backgrounds where transparency is not needed; some CMS platforms that do not accept PNG</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 font-medium text-foreground">PDF</td>
                  <td className="py-2 pr-4">Vector (when saved correctly)</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">Print files — business cards, banners, signage, stationery</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 font-medium text-foreground">AI / EPS</td>
                  <td className="py-2 pr-4">Vector</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">Sending to print shops or other designers for editing and adaptation</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 font-medium text-foreground">ICO / PNG (favicon)</td>
                  <td className="py-2 pr-4">Raster</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">Browser tab icon, bookmark icon, home screen icon on mobile</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">The Complete Logo Kit: What Every Brand Should Keep</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            A complete logo kit is a folder of files organised so that any team member or agency can find the right file for any use case in under a minute. Here is what it should contain:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Vector originals:</strong> SVG, AI or EPS files of the full logo, the logomark only (the icon or symbol without wordmark) and the wordmark only (the text without symbol). These are the master files. Everything else is exported from these.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Colour variants:</strong> Full colour on white/light background, full colour on dark background, single-colour black version, single-colour white version (also called reversed). Some situations — embroidery, single-colour printing, newspaper ads — require a simplified version.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>PNG exports:</strong> Each variant in PNG at 2x resolution for digital use — typically 1200px wide for the full logo, 800px for the logomark only. Include versions with transparent background and versions on a solid white background.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Social media sizes:</strong> Square crops sized 800x800px for Facebook, Instagram and LinkedIn profile images. Platforms compress images on upload; starting at higher resolution preserves quality after compression.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Print-ready PDF:</strong> Vector PDF with CMYK colour values for any print use. CMYK is the colour model used by printing presses; RGB colours (used on screens) shift when converted to CMYK, so your printer should work from a CMYK file.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Favicon set:</strong> See the next section for the specific files needed. These are small but critical for your website's professionalism.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">The Favicon Set: What Files You Need</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            A favicon is the small icon that appears in browser tabs, bookmarks, search results and on mobile home screens when a user pins your site. A single ICO file no longer covers all contexts. Here is the full set:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-muted border-collapse" style={sans}>
              <thead>
                <tr className="border-b border-hairline">
                  <th className="text-left py-2 pr-4 text-foreground font-normal italic">File</th>
                  <th className="text-left py-2 pr-4 text-foreground font-normal italic">Size</th>
                  <th className="text-left py-2 text-foreground font-normal italic">Used For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 font-medium text-foreground">favicon.ico</td>
                  <td className="py-2 pr-4">16x16, 32x32, 48x48 (multi-size)</td>
                  <td className="py-2">Legacy browser tabs, Windows taskbar pinned sites</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 font-medium text-foreground">favicon-32x32.png</td>
                  <td className="py-2 pr-4">32x32 px</td>
                  <td className="py-2">Modern browsers, standard tab icon</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 font-medium text-foreground">apple-touch-icon.png</td>
                  <td className="py-2 pr-4">180x180 px</td>
                  <td className="py-2">iOS home screen icon when user adds site to home screen</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 font-medium text-foreground">android-chrome-192x192.png</td>
                  <td className="py-2 pr-4">192x192 px</td>
                  <td className="py-2">Android home screen and PWA icon</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            To generate all of these from a single image, use a tool like RealFaviconGenerator.net. Upload your high-resolution logomark (at least 512x512px), configure the background colour and padding, and download the complete set. The tool also generates the HTML tags and a web manifest file.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Favicon Setup in Next.js</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Next.js with the App Router has a built-in favicon convention. Place your <code>favicon.ico</code> file directly in the <code>app/</code> directory and Next.js will serve it automatically at <code>/favicon.ico</code>. For the full set including Apple touch icon and Android icons, you can either add them to your <code>public/</code> directory and reference them manually in your layout, or use the metadata API.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Using the metadata API, export an <code>icons</code> object from your root <code>layout.tsx</code>. Define the shortcut icon, Apple touch icon and additional sizes. Next.js will render the correct <code>&lt;link&gt;</code> tags in the document head automatically. This approach is cleaner than manual HTML and works correctly with server-side rendering. For more on Next.js site setup, our <Link href="/blog/nextjs-vs-squarespace" className="text-brand-green hover:underline">Next.js vs Squarespace comparison</Link> explains when the extra setup effort is worth it.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">LaunchCraft AI Logo Maker</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            When you create a logo with the <Link href="/logo-maker" className="text-brand-green hover:underline">LaunchCraft AI logo maker</Link>, the output includes SVG, PNG and a complete favicon set by default. You do not need to export, resize or convert files manually. The PNG exports are generated at the correct resolutions for each use case, and the favicon package includes the ICO, Apple touch icon and Android icon files ready to place in your project.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            If you already have a logo but are missing certain formats, your original designer should be able to export the missing files from the source AI or SVG file at no charge. If you have only a PNG, a designer can re-create the logo in vector format — a process called vectorisation — from which all other formats can be generated. This is worth doing before the logo is used at large print sizes.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Common Mistakes</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Using a JPG for the website header:</strong> JPG does not support transparency. On a coloured or patterned background, a JPG logo will have a white or coloured box around it. Always use SVG or PNG with a transparent background for website header logos.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Sending a small PNG to a print shop:</strong> A PNG at 300px wide will print at roughly 2.5 centimetres at print resolution (300 DPI). Scaling it up for a banner or business card will produce a blurry result. Always send print shops a vector PDF or AI file, not a PNG.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Having only one colour version:</strong> A dark logo on a dark background is invisible. A colourful logo on a busy photograph is illegible. Every brand needs at minimum a full-colour version and a white version for dark contexts. This is covered in more detail in our guide to <Link href="/blog/choose-brand-colours-fonts" className="text-brand-green hover:underline">choosing brand colours and fonts</Link>.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Losing the original source files:</strong> If you lose the AI or SVG source file, you lose the ability to edit the logo cleanly in future. Keep originals backed up in at least two locations — a cloud drive and a local copy. This is especially important if you change designers.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Skipping the favicon:</strong> A browser tab without a favicon looks unfinished and makes it harder for users to find your site among many open tabs. Setting up a proper favicon takes 15 minutes and significantly improves perceived professionalism.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Ownership of Your Logo Files</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            When you commission a logo design, confirm in writing that you receive full ownership of all source files and the copyright to the design itself. Some freelancers and agencies retain copyright by default and license the logo to you rather than transferring ownership. This becomes a problem when you need to edit the logo, use it in a new context or switch design agencies. A clear contract should state that upon final payment, all intellectual property in the logo — including source files — transfers to you. This applies equally to logos created with AI tools; check the terms of service of the platform for IP ownership clarity. For a full picture of what brand identity involves beyond the logo file, see our guide to <Link href="/blog/brand-identity-vs-logo" className="text-brand-green hover:underline">brand identity vs logo</Link>.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Frequently Asked Questions</h3>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">Can I use an SVG on all websites?</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            SVG is supported by all modern browsers and is the best format for website logos. Some older CMS platforms or email clients do not support SVG, in which case use a PNG at the required size. Avoid SVG in email signatures — use PNG instead, as email client SVG support is inconsistent.
          </p>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">What size should my logo PNG be for a website header?</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            If you must use PNG rather than SVG, export at 2x the display size to account for high-density (Retina) screens. For a logo displayed at 200x60px on screen, export at 400x120px. This prevents the logo from appearing blurry on modern MacBooks, iPhones and high-resolution Android devices. Compress the PNG using a tool like Squoosh or TinyPNG before adding it to your website to minimise load time impact.
          </p>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">My designer gave me only a PNG — what should I do?</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Ask for the source file first. Any professional designer will have created the logo in Illustrator, Figma or Sketch, and should provide the original file or a correctly exported SVG. If the designer is unavailable, a vectorisation service or any competent designer can trace the PNG and recreate it as a clean vector. For simple logos with text and geometric shapes, this process takes an hour or two. For complex logos with gradients or detailed illustrations, it takes longer. Do not pay for large print items — banners, vehicle wraps, signage — without a vector source file.
          </p>
        </article>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-hairline text-center">
        <FadeIn>
          <Link href="/blog" className="inline-block px-8 py-3 border border-hairline text-[10px] tracking-[0.2em] uppercase text-foreground hover:border-brand-green hover:text-brand-green transition-colors duration-300 mr-4" style={sans}>More Articles</Link>
          <Link href="/contact" className="inline-block px-8 py-3 bg-foreground text-background text-[10px] tracking-[0.2em] uppercase hover:bg-brand-green transition-colors duration-300" style={sans}>Start a Project</Link>
        </FadeIn>
      </section>
    </main>
  );
}
