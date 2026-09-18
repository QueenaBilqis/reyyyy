# Rey's Love Notes

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>for rey 🖤</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Montserrat:wght@200;300;400;500;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #fcfbfa;
            --accent-red: #7a1c1c;
            --accent-red-light: #a32b2b;
            --text-dark: #1a1a1a;
            --text-muted: #666666;
            --border-color: #7a1c1c;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            background-color: #121212;
            color: var(--text-dark);
            font-family: 'Cormorant Garamond', serif;
            overflow-x: hidden;
        }

        /* ==========================================
           INTRO ENVELOPE ANIMATION OVERLAY
           ========================================== */
        #intro-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: #0a0a0a;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: opacity 1.2s cubic-bezier(0.65, 0, 0.35, 1), visibility 1.2s;
            cursor: pointer;
            overflow: hidden;
            user-select: none;
        }

        #intro-overlay.hidden {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
        }

        .envelope-wrapper {
            position: relative;
            width: 90%;
            max-width: 520px;
            height: 380px;
            perspective: 1200px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .envelope-card {
            position: absolute;
            width: 100%;
            max-width: 480px;
            border-radius: 8px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
            transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.7s ease, filter 0.7s ease;
            transform-style: preserve-3d;
        }

        /* Step 1 Envelope: Miss You */
        #env-stage-1 {
            z-index: 2;
            transform: scale(1) rotate(0deg);
            opacity: 1;
        }

        /* Step 2 Envelope: Into My Heart */
        #env-stage-2 {
            z-index: 1;
            transform: scale(0.85) translateY(30px) rotate(-4deg);
            opacity: 0.6;
            filter: brightness(0.7);
        }

        .envelope-card img {
            width: 100%;
            height: auto;
            display: block;
            border-radius: 6px;
        }

        .intro-prompt {
            margin-top: 40px;
            color: #e0d5c1;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.75rem;
            letter-spacing: 4px;
            text-transform: uppercase;
            animation: pulseText 2s infinite ease-in-out;
            text-shadow: 0 2px 10px rgba(0,0,0,0.5);
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .intro-prompt::before, .intro-prompt::after {
            content: '';
            display: inline-block;
            width: 25px;
            height: 1px;
            background: #a32b2b;
        }

        @keyframes pulseText {
            0%, 100% { opacity: 0.4; transform: translateY(0); }
            50% { opacity: 1; transform: translateY(-3px); }
        }

        /* Envelope Open Animation Sequence */
        .anim-step-1 #env-stage-1 {
            transform: translateY(-120%) rotate(-8deg) scale(1.05);
            opacity: 0;
            z-index: 1;
        }

        .anim-step-1 #env-stage-2 {
            opacity: 1;
            filter: brightness(1);
            transform: scale(1.08) translateY(-10px) rotate(0deg);
            z-index: 3;
        }

        .anim-step-2 #env-stage-2 {
            transform: scale(1.4) translateY(-80px) rotate(2deg);
            opacity: 0;
            filter: blur(10px);
        }

        /* ==========================================
           MAIN CONTENT CONTAINER
           ========================================== */
        #main-container {
            max-width: 1200px;
            margin: 0 auto;
            background-color: var(--bg-color);
            min-height: 100vh;
            box-shadow: 0 0 50px rgba(0,0,0,0.4);
            position: relative;
            opacity: 0;
            transition: opacity 1.5s ease 0.3s;
        }

        #main-container.visible {
            opacity: 1;
        }

        /* Replay Intro Button & Music Toggle */
        .top-controls {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            display: flex;
            gap: 12px;
        }

        .ctrl-btn {
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid var(--accent-red);
            color: var(--accent-red);
            padding: 8px 14px;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.65rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            cursor: pointer;
            border-radius: 20px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            backdrop-filter: blur(4px);
        }

        .ctrl-btn:hover {
            background: var(--accent-red);
            color: #fff;
            transform: translateY(-2px);
        }

        /* SECTION STYLING */
        section {
            min-height: 100vh;
            padding: 80px 40px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-bottom: 1px solid rgba(122, 28, 28, 0.1);
        }

        /* ==========================================
           PAGE 1 - OPENING
           ========================================== */
        .page-1 {
            align-items: center;
            background: radial-gradient(circle at center, #ffffff 0%, #faf6f0 100%);
        }

        .header-decorative {
            width: 100%;
            max-width: 900px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 40px;
            position: relative;
        }

        .header-num {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.8rem;
            font-weight: 300;
            color: var(--accent-red);
            letter-spacing: 4px;
        }

        .main-title-wrap {
            text-align: center;
        }

        .main-title {
            font-family: 'Pinyon Script', cursive;
            font-size: 4.8rem;
            font-weight: 400;
            color: var(--accent-red);
            line-height: 1.1;
            text-shadow: 0 2px 4px rgba(122, 28, 28, 0.05);
        }

        .main-title span.brackets {
            font-family: 'Cormorant Garamond', serif;
            font-size: 3.2rem;
            font-weight: 400;
            letter-spacing: 3px;
            display: inline-block;
            margin-top: 5px;
        }

        .subtitle {
            font-family: 'Montserrat', sans-serif;
            font-size: 0.7rem;
            font-weight: 300;
            letter-spacing: 6px;
            text-transform: uppercase;
            color: #555;
            margin-top: 15px;
        }

        .opening-text {
            max-width: 650px;
            text-align: center;
            margin: 20px 0 40px;
            font-size: 1.35rem;
            line-height: 1.9;
            font-style: italic;
            font-weight: 300;
            color: #2b2b2b;
        }

        .opening-text .highlight {
            font-family: 'Montserrat', sans-serif;
            font-size: 0.75rem;
            letter-spacing: 3px;
            font-style: normal;
            display: block;
            margin-top: 25px;
            color: var(--accent-red);
            text-transform: lowercase;
        }

        .photo-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 35px;
            margin: 30px 0;
            max-width: 950px;
            width: 100%;
        }

        .photo-frame {
            position: relative;
            border: 2px solid var(--accent-red);
            padding: 8px;
            background: #fff;
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
            cursor: pointer;
            box-shadow: 0 10px 25px rgba(0,0,0,0.05);
        }

        .photo-frame:hover {
            transform: translateY(-8px);
            box-shadow: 10px 10px 0px var(--accent-red);
        }

        .photo-frame img {
            width: 100%;
            height: 360px;
            object-fit: cover;
            filter: grayscale(100%) contrast(1.05);
            display: block;
            transition: filter 0.5s ease;
        }

        .photo-frame:hover img {
            filter: grayscale(0%) contrast(1);
        }

        .photo-label {
            position: absolute;
            background: var(--accent-red);
            color: #fff;
            padding: 4px 10px;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.58rem;
            letter-spacing: 2px;
            text-transform: lowercase;
            font-weight: 400;
            z-index: 5;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }

        .label-left { top: 20px; left: -12px; }
        .label-right { bottom: 25px; right: -12px; }

        .page-1-footer {
            text-align: center;
            margin-top: 50px;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.7rem;
            letter-spacing: 4px;
            color: #777;
            text-transform: lowercase;
        }

        /* ==========================================
           PAGE 2 - SONGS & LOVE LETTER
           ========================================== */
        .page-2 {
            background: #faf7f2;
            align-items: center;
        }

        .nav-top {
            width: 100%;
            max-width: 900px;
            display: flex;
            justify-content: space-between;
            margin-bottom: 50px;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.72rem;
            letter-spacing: 3px;
            text-transform: lowercase;
            color: #777;
            border-bottom: 1px solid rgba(0,0,0,0.06);
            padding-bottom: 15px;
        }

        .nav-top span.active {
            color: var(--accent-red);
            font-weight: 500;
        }

        .album-section {
            text-align: center;
            margin: 20px 0 40px;
            position: relative;
            width: 100%;
            max-width: 700px;
        }

        /* Ribbon SVG illustration behind song text */
        .ribbon-svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            max-width: 500px;
            height: auto;
            opacity: 0.25;
            pointer-events: none;
        }

        .album-title {
            font-family: 'Pinyon Script', cursive;
            font-size: 4.2rem;
            color: var(--accent-red);
            margin-bottom: 10px;
            position: relative;
            z-index: 2;
            line-height: 1.2;
        }

        .album-artist {
            font-family: 'Montserrat', sans-serif;
            font-size: 0.75rem;
            letter-spacing: 4px;
            text-transform: lowercase;
            color: #666;
            margin-bottom: 40px;
            position: relative;
            z-index: 2;
        }

        .love-letter {
            max-width: 680px;
            text-align: center;
            font-size: 1.2rem;
            line-height: 2.1;
            font-weight: 300;
            font-style: italic;
            color: #2c2c2c;
            background: rgba(255,255,255,0.6);
            padding: 40px 50px;
            border-radius: 4px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.02);
            border: 1px solid rgba(122, 28, 28, 0.08);
        }

        .love-letter p {
            margin-bottom: 22px;
        }

        .love-letter p:last-child {
            margin-bottom: 0;
        }

        /* ==========================================
           PAGE 3 - COLOR BLACK / VINYL RECORDS
           ========================================== */
        .page-3 {
            background: #ffffff;
            overflow: hidden;
        }

        /* Star Accents like reference image */
        .star-accent {
            position: absolute;
            color: #e8c4c4;
            opacity: 0.6;
            pointer-events: none;
        }
        .star-1 { top: 60px; left: 40px; width: 50px; }
        .star-2 { top: 120px; right: 50px; width: 60px; }
        .star-3 { bottom: 80px; left: 80px; width: 40px; }

        .color-title {
            text-align: center;
            margin-bottom: 60px;
        }

        .color-title .regular {
            font-family: 'Cormorant Garamond', serif;
            font-size: 2.2rem;
            font-style: italic;
            font-weight: 300;
            color: #333;
        }

        .color-title .script {
            font-family: 'Pinyon Script', cursive;
            font-size: 5rem;
            display: block;
            color: var(--accent-red);
            margin-top: 0px;
            line-height: 1;
        }

        .vinyl-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
            max-width: 1150px;
            margin: 0 auto;
            width: 100%;
        }

        .vinyl-item {
            text-align: center;
            position: relative;
        }

        .vinyl-container {
            position: relative;
            width: 300px;
            height: 270px;
            margin: 0 auto 25px;
            cursor: pointer;
        }

        /* Vinyl Cover Image */
        .vinyl-photo-wrap {
            position: absolute;
            left: 10px;
            top: 0;
            width: 220px;
            height: 260px;
            z-index: 3;
            box-shadow: 5px 8px 20px rgba(0,0,0,0.15);
            border: 1px solid #ddd;
            background: #fff;
            overflow: hidden;
            transition: transform 0.4s ease;
        }

        .vinyl-container:hover .vinyl-photo-wrap {
            transform: translateX(-10px);
        }

        .vinyl-photo {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        /* Vinyl Record Disc */
        .vinyl-record {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            width: 210px;
            height: 210px;
            border-radius: 50%;
            background: repeating-radial-gradient(
                #181818 0,
                #181818 2px,
                #080808 3px,
                #080808 5px
            );
            box-shadow: 0 8px 25px rgba(0,0,0,0.4);
            z-index: 2;
            transition: right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 8s linear infinite;
        }

        .vinyl-container:hover .vinyl-record {
            right: -25px;
            animation: spinVinyl 6s linear infinite;
        }

        @keyframes spinVinyl {
            100% { transform: translateY(-50%) rotate(360deg); }
        }

        .vinyl-record::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 75px;
            height: 75px;
            background: #faf5ee;
            border-radius: 50%;
            border: 10px solid #111;
            box-shadow: inset 0 0 5px rgba(0,0,0,0.3);
        }

        .vinyl-record::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 18px;
            height: 18px;
            background: #050505;
            border-radius: 50%;
        }

        .vinyl-number {
            font-family: 'Montserrat', sans-serif;
            font-size: 0.7rem;
            letter-spacing: 3px;
            margin-bottom: 12px;
            color: #888;
        }

        .vinyl-title {
            font-family: 'Montserrat', sans-serif;
            font-size: 0.8rem;
            letter-spacing: 2px;
            text-transform: lowercase;
            margin-bottom: 12px;
            font-weight: 500;
            color: var(--accent-red);
        }

        .vinyl-text {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.08rem;
            font-style: italic;
            line-height: 1.7;
            color: #444;
        }

        .vinyl-quote {
            font-size: 0.95rem;
            line-height: 1.6;
            color: #555;
            margin-top: 8px;
            border-left: 2px solid var(--accent-red);
            padding-left: 12px;
            text-align: left;
            display: inline-block;
        }

        /* ==========================================
           PAGE 4 - FINAL LETTER
           ========================================== */
        .page-4 {
            background: #faf7f2;
            align-items: center;
        }

        .final-letter {
            max-width: 720px;
            text-align: center;
            background: #fff;
            padding: 70px 60px;
            border: 1px solid rgba(122, 28, 28, 0.15);
            box-shadow: 0 15px 40px rgba(0,0,0,0.03);
            position: relative;
        }

        .dear-rey {
            font-family: 'Pinyon Script', cursive;
            font-size: 3.8rem;
            color: var(--accent-red);
            margin-bottom: 40px;
        }

        .letter-content {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.18rem;
            line-height: 2.1;
            font-weight: 300;
            color: #2b2b2b;
            text-align: justify;
            text-align-last: center;
        }

        .letter-content p {
            margin-bottom: 25px;
        }

        .signature {
            margin-top: 50px;
            font-family: 'Pinyon Script', cursive;
            font-size: 3rem;
            color: var(--accent-red);
            line-height: 1.4;
        }

        .heart {
            font-size: 1.4rem;
            margin-top: 15px;
            display: block;
            color: var(--accent-red);
        }

        /* ==========================================
           STICKY NAVIGATION BAR AT BOTTOM
           ========================================== */
        .sticky-nav {
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            align-items: center;
            gap: 25px;
            z-index: 900;
            background: rgba(255, 255, 255, 0.92);
            padding: 10px 24px;
            border-radius: 40px;
            border: 1px solid rgba(122, 28, 28, 0.2);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
            backdrop-filter: blur(8px);
        }

        .nav-btn {
            border: none;
            background: transparent;
            cursor: pointer;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.7rem;
            letter-spacing: 3px;
            text-transform: lowercase;
            color: var(--text-dark);
            transition: all 0.3s ease;
            padding: 4px 8px;
        }

        .nav-btn:hover {
            color: var(--accent-red);
        }

        .page-indicator-sticky {
            font-family: 'Montserrat', sans-serif;
            font-size: 0.68rem;
            letter-spacing: 2px;
            color: #888;
        }

        /* Image replacement modal / file input hint */
        .img-input-hidden {
            display: none;
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 968px) {
            section {
                padding: 60px 20px;
            }

            .main-title {
                font-size: 3.2rem;
            }

            .main-title span.brackets {
                font-size: 2.2rem;
            }

            .photo-grid, .vinyl-grid {
                grid-template-columns: 1fr;
                gap: 40px;
            }

            .photo-frame img {
                height: 320px;
            }

            .vinyl-container {
                width: 270px;
                height: 240px;
            }

            .vinyl-photo-wrap {
                width: 180px;
                height: 220px;
            }

            .vinyl-record {
                width: 170px;
                height: 170px;
            }

            .final-letter {
                padding: 40px 25px;
            }

            .album-title {
                font-size: 3rem;
            }

            .color-title .script {
                font-size: 3.8rem;
            }

            .sticky-nav {
                bottom: 15px;
                gap: 15px;
                padding: 8px 18px;
            }
        }
    



    
    


        


            
            


                
            



            
            


                
            


        



        


            Click to open letter for Rey 🖤
        


    



    
    


        💌 Replay Intro
        🎵 Play Music
    



    
    

    
    



        
        


            


                09
                


                    

You too divine


                    to just be [ MINE ]
                


                02
            



            


                

You deserve to be loved, rey.

                and somehow, out of all the people in this world,

                my heart found its way to you.


                
                
                    my favorite person, my safest place,

                    and the one i want to keep choosing.
                
            



            


                
                


                    
                    alec's gallery's
                    
                


                
                


                    
                    my pretty boy
                    
                


                
                


                    
                    
                


            



            

made with all my love, for rey 🖤 • made by ecliwcze


        



        
        


            


                true love
                songs that remind me of you
                other month
            



            


                
                
                    
                    
                
                
                

Rey, i'm so in love with You


                

cinderella — mac miller


            



            


                

rey,


                

sometimes i wonder how one person can become such a big part of my life. and then i remember all the little things about you — the way you talk, the way you care, the random things you say.


                

i don't think i fell in love with one big moment. i fell in love with all the little pieces of you, one by one, until suddenly, loving you became one of the most natural things in my life.


                

because if there's one person i'd want beside me through all the versions of myself, it's you.


            


        



        
        


            
            
                
            
            
                
            
            
                
            

            


                You remind me of
the color
                black
            



            


                
                


                    

01


                    


                        


                            
                        


                        


                    


                    

you feel like home


                    

when everything feels too loud,
somehow, you make my world
a little quieter.


                    

"You're the star I look for every night..."


                



                
                


                    

02


                    


                        


                            
                        


                        


                    


                    

my favorite person


                    

i could have a thousand things going on,
and my mind still finds its way to you.
it's always you, rey.


                    

"The Sun don't shine when I'm alone..."


                



                
                


                    

03


                    


                        


                            
                        


                        


                    


                    

a little apology


                    

i'm still learning how to love you better,
how to understand you,
and how to communicate.


                    

"You really, really love me..."


                


            


        



        
        


            


                

Dear rey,


                
                


                    

if i could put everything i feel for you into words, i probably still wouldn't be able to explain it completely.


                    
                    

but i hope you know that i love you genuinely. not just for the good days, but also through the confusing days, the little arguments, the moments when we don't understand each other.


                    
                    

i'm sorry for every time i've made you feel anything less than loved. i'm sorry for the times my emotions get too loud.


                    
                    

but please know, i'm trying. because you're someone worth trying for.


                    
                    

i don't want a perfect relationship. i want our relationship. the one where we can grow together, learn from each other, and keep choosing each other even when things aren't perfect.


                    
                    

thank you for being part of my life, rey. thank you for every laugh, every conversation, every little moment that became a memory.


                    
                    

i love you more than i know how to say. and if you ever forget, come back to this page and let me remind you.


                



                


                    it's you.

                    it has always been you.

                    and i hope, for a very long time,

                    it gets to be us.
                    🖤
                


            


        



    



    
    


        back
        page 1 of 4
        next
    



    
    




play song cinderrella by mac miller terus foto 1 itu buat landing page pertama, foto dua buat landing page kedua  nah aku mau gamau keliatan ai nya, and then smooth the transision dan animasinya

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/58a8fdaf-ad69-44f4-a551-b19ee96634d5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
