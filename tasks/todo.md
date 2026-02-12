# Image Integration Plan

## Current State
- Site uses placeholder paths like `/images/logo/logo.jpg`, `/images/hero/hero-1.jpg`, `/images/hero/hero-2.jpg`, and `/images/products/*-hires.jpg`
- Real images have been downloaded to `public/images/` with different filenames
- Product images in products.json reference non-existent `-hires.jpg` filenames
- About page uses placeholder divs instead of real images
- No blog section currently exists on the site

## Tasks

- [x] 1. **Header logo** - Update `Header.js` from `/images/logo/logo.jpg` to `/images/logo/Mountains_Logo_Black_Background.jpg`
- [x] 2. **Homepage hero** - Update `page.js` hero background from `/images/hero/hero-1.jpg` to `/images/homepage/IMG_0006_coffee.jpg`
- [x] 3. **Homepage about image** - Update `page.js` about section from `/images/hero/hero-2.jpg` to `/images/homepage/IMG_0020_clothing.jpg`
- [x] 4. **Homepage truck/location logo** - Update the two logo references in homepage from `/images/logo/logo.jpg` to `/images/logo/Mountains_Logo_Black_Background.jpg`
- [x] 5. **Products JSON** - Update `lib/products.json` to use real filenames:
  - `blue-flame` image: `/images/products/BlueFlame_Front.jpg`, label: `/images/products/BlueFlame_Label_Back.jpg`
  - `bonneville-kraken` image: `/images/products/BonnevilleKraken_Front.jpg`
  - `copacabana` image: `/images/products/Copacabana_Front.jpg`, label: `/images/products/Copacabana_Label.jpg`
  - `hells-gate` image: `/images/products/HellsGate_Front.jpg`, label: `/images/products/HellsGate_Label_1.jpg`
  - `blue-nile` image: `/images/products/BlueNile_Front.jpg`, label: `/images/products/BlueNile_Label.jpg`
  - `trailhead` image: `/images/products/Trailhead_Front.jpg`, label: `/images/products/Trailhead_Label.jpg`
  - `shiner-barrel`: HEIC file -- left as-is (won't work in browsers, needs conversion)
- [x] 6. **Homepage featured products** - Update the 4 featured product image paths in `app/page.js` to match the real filenames
- [x] 7. **About page placeholders** - Replaced the two placeholder divs with real images (`blog_post_1.jpg` and `blog_post_2_live.jpg`)
- [x] 8. **Blog images** - Used blog images on the About page since there is no blog page (covered by task 7)

## Notes
- HEIC files (Shiner, Flask products) will NOT work in browsers. Skip these entirely.
- Keep using plain `<img>` tags since the codebase already does -- converting to Next.js `<Image>` would require width/height for every image and is a bigger refactor. Only switch if it makes sense.
- Every change should be minimal -- just swap the file paths, don't redesign layouts.

## Review

### Summary of Changes

**4 files modified:**

1. **`app/components/Header/Header.js`** (1 line changed)
   - Updated logo `src` from `/images/logo/logo.jpg` to `/images/logo/Mountains_Logo_Black_Background.jpg`

2. **`app/page.js`** (6 lines changed)
   - Hero background: `/images/hero/hero-1.jpg` -> `/images/homepage/IMG_0006_coffee.jpg`
   - About section image: `/images/hero/hero-2.jpg` -> `/images/homepage/IMG_0020_clothing.jpg`
   - Truck section logo: `/images/logo/logo.jpg` -> `/images/logo/Mountains_Logo_Black_Background.jpg`
   - Location section logo: `/images/logo/logo.jpg` -> `/images/logo/Mountains_Logo_Black_Background.jpg`
   - 4 featured product images updated to real filenames (BlueFlame_Front.jpg, BonnevilleKraken_Front.jpg, HellsGate_Front.jpg, Copacabana_Front.jpg)

3. **`lib/products.json`** (12 lines changed)
   - All 6 JPG coffee products now point to their real `_Front.jpg` image files
   - All label images updated to their real `_Label.jpg` / `_Label_Back.jpg` files
   - Shiner barrel product left with `.heic` path (needs manual conversion to JPG)

4. **`app/about/page.js`** (2 sections changed)
   - "Origin Story" placeholder div replaced with `<img src="/images/blog/blog_post_1.jpg">`
   - "Small Batch" placeholder div replaced with `<img src="/images/blog/blog_post_2_live.jpg">`

### Known Issues / Follow-ups
- **HEIC files need conversion**: The Shiner Barrel product (`shiner-barrel.heic`) and all Flask products still reference HEIC files. These need to be converted to JPG/PNG format before they will display in browsers.
- **Additional HEIC product images**: `ShinerBike.heic`, `ShinerTable.heic`, `Flask_Main.heic`, `Flask_EagleShield.heic`, `Flask_EagleShieldBurst.heic`, `Flask_TikiBurst.heic`, `Flask_Shiner.heic` -- all need conversion if they are to be used.
- **Old placeholder images**: The files `public/images/hero/hero-1.jpg` and `public/images/hero/hero-2.jpg` are no longer referenced and can be removed if desired.
