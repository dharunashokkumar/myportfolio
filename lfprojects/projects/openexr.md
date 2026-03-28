# OpenEXR

## category
Visual Effects

## about

openexr is the image file format used by the entire film and VFX industry — every marvel movie, every pixar film, every netflix show with CGI uses EXR frames in their pipeline.

- created by industrial light & magic (ILM) in 1999, open sourced in 2003
- won an academy award for technical achievement in 2007 — an open source project with an oscar
- now maintained under the academy software foundation (ASWF), which is a partnership between the oscar people and the linux foundation

### why it exists

- regular images (JPEG, PNG) use 8 bits per channel — values from 0 to 255
- that means the brightest possible pixel is only 255x brighter than the darkest
- in real life, the sun is thousands of times brighter than a shadow — JPEG can't represent that
- EXR uses **floating point numbers** (16-bit or 32-bit float) instead of integers
- a pixel can be `(0.001, 0.892, 12450.0)` — no upper limit on brightness
- this is what "high dynamic range" (HDR) actually means

### the clipping problem

- take a photo of a window on a sunny day with your phone
- the sky = `(255, 255, 255)`, the sun = `(255, 255, 255)` — they look identical in JPEG
- in reality one was 10x brighter, but that data is gone forever
- in EXR: sky = `(4.5, 5.2, 6.0)`, sun = `(45000.0, 42000.0, 38000.0)` — all preserved
- VFX artists can pull brightness down and recover clouds, sun rays, all of it

## tech stack

- **core library:** C++ (original API from 2003) + C (newer OpenEXRCore library from 2021)
- **python bindings** available
- **build system:** CMake
- **compression:** multiple built-in codecs — ZIP, PIZ (wavelet/huffman for grainy images), B44, and newer HTJ2K (JPEG 2000 variant)
- **math library:** Imath — a separate companion library for 2D/3D vector and matrix operations

### architecture

- it's a library, not an application — you `#include` it in your code
- pass it pixel data as float arrays, it writes `.exr` files
- the "hello world" is literally 10 lines of C++
- supports multi-channel (store RGB, alpha, depth, normals — all in one file)
- supports multi-part (multiple separate images in one file)
- supports deep data (variable-length samples per pixel — used for deep compositing)

## file sizes and storage

- a single 4K EXR frame (16-bit float, RGBA) ≈ 30-70 MB
- compare to JPEG of same resolution ≈ 5 MB
- a 2-hour movie at 24fps = 172,800 frames ≈ 8.6 TB for one version
- VFX studios render multiple passes per shot (lighting, shadows, reflections — all separate)
- real production: a single movie can generate petabytes of EXR data
- studios use render farms, fast network storage, and tape archival to handle this

## who uses it

- ILM, weta digital, walt disney animation, sony pictures imageworks, pixar, dreamworks — all contributed code
- every major VFX pipeline in the world
- blender, unreal engine, nuke, houdini — all support EXR natively
- the VFX industry runs 90% on linux (rocky linux alone has ~58% of studio workstations)

## the bigger picture — ASWF

the academy software foundation is where hollywood and linux meet. other open source projects in this space:

- **OpenColorIO** — color consistency across monitors and pipelines (from sony)
- **OpenVDB** — volumetric data for smoke, fire, clouds (from dreamworks, also has an oscar)
- **MaterialX** — material/texture standards (from ILM)
- **OpenCue** — render queue management across thousands of machines
- **OpenRV** — media review and playback (sci-tech award winner)
- **ACES** — the global standard for color management in film

30+ member companies including adobe, nvidia, microsoft, netflix, disney, warner bros.

## how to play with it

- **blender** (free) — render a scene to EXR, then adjust exposure in compositor to see HDR in action
- **python** — `pip install OpenEXR` to read/write EXR files from code
- **command line** — ships with tools like `exrheader`, `exrinfo`, `exrstdattr`
- **ffmpeg** — can convert EXR sequences to video and back

## thoughts

- this was the most unexpected LF project i've come across — had no idea the film industry was this deeply tied to linux and open source
- the technical concept is elegant — just use floats instead of integers for pixel values, and suddenly you preserve all the light information
- the 8-bit clipping problem clicked immediately once i understood it — every phone photo you've ever taken has thrown away light data
- the fact that an open source C++ library has an actual oscar is probably the coolest thing i've learned in this entire exploration
- contribution-wise this is probably hard — it's a mature C++ codebase used in production at the biggest studios in the world
- but they do have "good first issues" and the ASWF runs dev days events specifically to help new contributors get started

## resources

- [official site](https://www.openexr.com/)
- [github repo](https://github.com/AcademySoftwareFoundation/openexr)
- [about page](https://openexr.com/en/latest/about.html)
- [API docs](https://openexr.com/en/latest/API.html)
- [install guide](https://openexr.com/en/latest/install.html)
- [command line tools](https://openexr.com/en/latest/tools.html)
- [ASWF dev days — contributor onboarding](https://lf-aswf.atlassian.net/wiki/spaces/OEXR/pages/11141408/ASWF+Dev+Days+2024)
- [NVIDIA GPU gems chapter on OpenEXR](https://developer.nvidia.com/gpugems/gpugems/part-iv-image-processing/chapter-26-openexr-image-file-format)