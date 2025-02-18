const url = new URL(window.location);
const search = url.searchParams;
const projectName = search.get('project');

const eleHeading = document.getElementById('heading');
const eleMediaContainer = document.getElementById('media');
const eleDescriptionContainer = document.getElementById('description');
const eleVideo = document.getElementById('video');
const eleProjectType = document.getElementById('project-type');
const eleProjectOverview = document.getElementById('project-overview');
const eleKeyFeatures = document.getElementById('key-features');
const eleTechnicalBreakdown = document.getElementById('technical-breakdown');
const eleConclusion = document.getElementById('conclusion');

switch (projectName) {
    case "basketball-advertisement":
        eleHeading.innerText = "Basketball Advertisement";
        eleVideo.innerHTML = `<video controls class="mt-4 w-75" autoplay>
                        <source src="../assets/videos/basketball.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>`;
        eleProjectType.innerText = "Collab Presentation | 3D Animated Advertisement";
        eleProjectOverview.innerText = `This dynamic 3D animated advertisement captures the intensity, energy, and excitement of a high-stakes basketball game. Designed to showcase cinematic realism, the project brings together detailed 3D modeling, fluid character animation, and immersive lighting to create a visually compelling sports advertisement.

                The scene unfolds in a fully designed stadium, packed with an animated crowd that reacts to the thrilling gameplay. The main and secondary players engage in lifelike basketball movements, from dribbling and passing to a stunning dunk finale. Every detail from the texture of the court to the lighting that highlights the action was carefully crafted to enhance realism and bring the audience into the game.`;
        eleKeyFeatures.innerHTML = `
                <li><strong>High-Quality 3D Models:</strong> Custom-designed props, basketball court, and a detailed stadium environment</li>
                <li><strong>Realistic Character Animation:</strong> Motion-captured movements for fluid and natural player actions</li>
                <li><strong>Advanced Crowd Simulation:</strong> Lifelike audience reactions using AI-driven crowd dynamics</li>
                <li><strong>Cinematic Camera Work:</strong> Dynamic angles and close-ups for a professional commercial feel</li>
                <li><strong>Next-Gen Rendering:</strong> Stunning lighting effects and real-time rendering for maximum visual impact</li>`;
        eleTechnicalBreakdown.innerHTML = `
                <li><strong>Maya:</strong> Modeled props, stadium, and animated the basketball</li>
                <li><strong>Substance Painter:</strong> Textured props, cloth, and stadium landscape for realism</li>
                <li><strong>Character Creator:</strong> Designed main and secondary players, crowd stimulation</li>
                <li><strong>iClone 8:</strong> Applied advanced character animation and cinematic camera movements</li>
                <li><strong>Unreal Engine:</strong> Final lighting and rendering for a polished, high-quality output</li>`;
        eleConclusion.innerText = `This project was a fusion of technical skill and creative storytelling, resulting in a visually striking animated ad that captures the essence of competitive basketball. The use of high-end software and advanced 3D techniques ensures a high level of realism and engagement, making it a standout addition to any professional portfolio.`;
        break;

    case "elevator-stuck":
        eleHeading.innerText = "Elevator Stuck Aid Demonstration";
        eleVideo.innerHTML = `<video controls class="mt-4 w-75" autoplay>
                        <source src="./assets/videos/elevator.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>`;
        eleProjectType.innerText = "Voice-over Explanation with 3D Animated Demonstration</p>";
        eleProjectOverview.innerText = "This informative 3D animated demonstration provides a step-by-step visual guide on what to do if an elevator gets stuck. Designed to be both educational and engaging, the animation pairs a clear voice-over explanation with lifelike 3D visuals to enhance viewer understanding and safety awareness.\n\nThe scene features a realistically modeled elevator interior with a fully animated character, demonstrating essential safety steps such as remaining calm, using the emergency button, and waiting for assistance. Careful attention was given to character expressions, movements, and environmental details to make the scenario as realistic and relatable as possible.";

        eleKeyFeatures.innerHTML = `
                <li><strong>Realistic 3D Environment:</strong> Detailed elevator interior with lifelike textures and lighting</li>
                <li><strong>Lifelike Character Animation:</strong> Smooth and natural movements for effective visual storytelling</li>
                <li><strong>Cinematic Camera Work:</strong> Strategic angles and zooms to emphasize key safety steps</li>
                <li><strong>Educational Value:</strong> Step-by-step guidance with clear voice-over synchronization</li>
                <li><strong>Professional Rendering:</strong> High-quality visuals that enhance clarity and realism</li>`;

        eleTechnicalBreakdown.innerHTML = `
                <li><strong>Maya:</strong> Modeled the elevator and related props</li>
                <li><strong>Character Creator:</strong> Designed the main character for the demonstration</li>
                <li><strong>iClone 8:</strong> Animated the character, applied camera movements, and set up lighting for realism</li>
                <li><strong>Substance Painter:</strong> Applied high-quality textures for realistic material representation</li>`;

        eleConclusion.innerText = "This project effectively blends educational content with immersive 3D animation, making it an excellent tool for safety training and awareness. The combination of detailed modeling, expressive character animation, and professional rendering ensures a compelling and informative viewer experience.";

        break;
    case "nft-cues":
        eleHeading.innerText = "3D NFT Cues";
        eleVideo.innerHTML = `<video controls class="mt-4 w-75" autoplay>
                        <source src="./src/assets/videos/cue.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>`;
        eleProjectType.innerText = "3D NFT Design & Animation";
        eleProjectOverview.innerText = "This project involved designing and animating 200 unique 3D NFT pool cues, categorized into four distinct levels. The goal was to transform 2D conceptual sketches into highly detailed, realistic 3D assets, making each cue a collectible digital masterpiece.\n\nThe process began with intricate 3D modeling of the cues, ensuring precise proportions and high detail. The models were then textured using Substance Painter, applying realistic materials such as wood grain, metallic accents, and custom engravings. Finally, post-processing effects and particle animations were added in After Effects to enhance the visual appeal and uniqueness of each cue.";

        eleKeyFeatures.innerHTML = `
                <li><strong>200 Unique NFT Designs:</strong> Categorized into four levels, each with distinct artistic styles</li>
                <li><strong>High-Quality 3D Modeling:</strong> Converted 2D sketches into ultra-detailed 3D assets</li>
                <li><strong>Realistic Texturing:</strong> Applied advanced material techniques for lifelike surface finishes</li>
                <li><strong>Animation & FX:</strong> Enhanced with dynamic effects, lighting, and subtle particle animations</li>
                <li><strong>Optimized for NFTs:</strong> High-quality renders designed for digital collectibles and marketplaces</li>`;

        eleTechnicalBreakdown.innerHTML = `
                <li><strong>Maya:</strong> Created 3D models, rigged, and animated cue movements</li>
                <li><strong>Substance Painter:</strong> Applied high-resolution textures for realism</li>
                <li><strong>After Effects:</strong> Added visual effects, lighting enhancements, and post-processing</li>`;

        eleConclusion.innerText = "This project showcases the fusion of digital artistry and blockchain technology, bringing unique, high-quality 3D NFT assets to life. With a balance of craftsmanship, realism, and animation effects, these NFT cues stand out as premium collectibles for gaming and digital art enthusiasts.";

        break;
    case "castle":
        eleMediaContainer.classList.remove('col-md-4');
        eleMediaContainer.classList.add('col-md-12');
        eleDescriptionContainer.classList.remove('col-md-8');
        eleDescriptionContainer.classList.add('col-md-12');
        eleHeading.innerText = "3D Midnight Castle";
        eleVideo.innerHTML = `<video controls class="mt-4 w-75" autoplay>
                        <source src="./src/assets/videos/castle.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>`;
        eleProjectType.innerText = "3D Environment Modeling | Fantasy Landscape";
        eleProjectOverview.innerText = "3D Midnight Castle is a breathtaking fantasy environment that brings an eerie yet magical world to life. This project focuses on detailed 3D environment modeling, capturing the mystical essence of an ancient castle surrounded by a dramatic nighttime landscape.\n\nThe castle itself features intricately designed towers, grand archways, and textured stone walls, giving it an authentic, weathered look. The surrounding environment—mystic trees, fog-covered terrain, and glowing ambient lights—adds to the immersive fantasy atmosphere. Careful attention was given to lighting and rendering, ensuring a cinematic visual experience that captures the mystery and grandeur of the scene.";

        eleKeyFeatures.innerHTML = `
                <li><strong>Highly Detailed 3D Castle:</strong> Modeled with precision, featuring towers, walls, and intricate architecture</li>
                <li><strong>Realistic Fantasy Textures:</strong> Weathered stone, moss-covered pathways, and lush landscape elements</li>
                <li><strong>Cinematic Lighting Setup:</strong> Atmospheric moonlight, subtle shadows, and dynamic reflections for depth</li>
                <li><strong>Immersive Environment:</strong> Carefully crafted terrain, fog effects, and realistic trees to enhance realism</li>
                <li><strong>High-Quality Rendering:</strong> Optimized for realism using Arnold Renderer for soft lighting and depth</li>`;

        eleTechnicalBreakdown.innerHTML = `
                <li><strong>Maya:</strong> Modeled the castle, environmental objects, and architectural details</li>
                <li><strong>Substance Painter:</strong> Applied detailed textures to castle walls, trees, and landscape features</li>
                <li><strong>Arnold Renderer:</strong> Created a high-quality, atmospheric lighting setup for a cinematic look</li>
                <li><strong>Unreal Engine:</strong> Finalized landscape texturing and scene integration for a seamless fantasy environment</li>`;

        eleConclusion.innerText = "This project demonstrates advanced 3D environment design, blending fantasy aesthetics with realistic rendering techniques. Through a combination of detailed modeling, intricate texturing, and atmospheric lighting, 3D Midnight Castle delivers a visually stunning and immersive experience that transports viewers into a mystical world.";

        break;
    case "luxurious-room":
        eleMediaContainer.classList.remove('col-md-4');
        eleMediaContainer.classList.add('col-md-12');
        eleDescriptionContainer.classList.remove('col-md-8');
        eleDescriptionContainer.classList.add('col-md-12');
        eleHeading.innerText = "Luxurious Room Decor";
        eleVideo.innerHTML = `
        <div id="imageCarousel" class="carousel slide mt-4 w-75" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="3"></button>
            <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="4"></button>
            <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="5"></button>
            <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="6"></button>
            <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="7"></button>
        </div>
        
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="./src/assets/images/luxurious-room/LR_1.jpeg" class="d-block w-100" alt="Image 1">
            </div>
            <div class="carousel-item">
                <img src="./src/assets/images/luxurious-room/LR_2.jpeg" class="d-block w-100" alt="Image 2">
            </div>
            <div class="carousel-item">
                <img src="./src/assets/images/luxurious-room/LR_3.jpeg" class="d-block w-100" alt="Image 3">
            </div>
            <div class="carousel-item">
                <img src="./src/assets/images/luxurious-room/LR_4.jpeg" class="d-block w-100" alt="Image 4">
            </div>
            <div class="carousel-item">
                <img src="./src/assets/images/luxurious-room/LR_5.jpeg" class="d-block w-100" alt="Image 5">
            </div>
            <div class="carousel-item">
                <img src="./src/assets/images/luxurious-room/LR_6.jpeg" class="d-block w-100" alt="Image 6">
            </div>
            <div class="carousel-item">
                <img src="./src/assets/images/luxurious-room/LR_7.jpeg" class="d-block w-100" alt="Image 7">
            </div>
            <div class="carousel-item">
                <img src="./src/assets/images/luxurious-room/LR_8.jpeg" class="d-block w-100" alt="Image 8">
            </div>
        </div>
        
        <button class="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
    </div>`;
        eleProjectType.innerText = "3D NFT Cues Samples Showcase";
        eleProjectOverview.innerText = "Luxurious Room Decor is a high-end 3D NFT Cues showcase featuring a meticulously designed interior environment that highlights premium furniture, elegant textures, and sophisticated lighting. This project was created to demonstrate luxury and realism in 3D assets, making it ideal for NFT Cues marketplaces and digital interior design collections. The scene includes beautifully crafted furniture, intricate decor elements, and a seamless blend of modern and classic aesthetics. Special attention was given to texture realism, ensuring that materials like polished wood, velvet upholstery, and marble surfaces reflect light naturally. The project was brought to life with real-time rendering in Unreal Engine, offering stunning visual quality with dynamic lighting and reflections.";

        eleKeyFeatures.innerHTML = `
                <li><strong>Elegant 3D Interior Design:</strong> A fully furnished space featuring luxurious decor elements</li>
                <li><strong>High-Quality Texturing:</strong> Realistic materials for fabrics, wood, and metal surfaces</li>
                <li><strong>Real-Time Visualization:</strong> Rendered in Unreal Engine for ultra-smooth, high-resolution presentation</li>
                <li><strong>Photorealistic Lighting:</strong> Warm ambient lighting with accurate shadows and reflections</li>
                <li><strong>NFT-Optimized Assets:</strong> Designed for showcasing high-value digital collectibles</li>`;

        eleTechnicalBreakdown.innerHTML = `
                <li><strong>Maya:</strong> Modeled the room structure, furniture, and decorative elements</li>
                <li><strong>Substance Painter:</strong> Applied detailed textures and material finishes for realism</li>
                <li><strong>Unreal Engine:</strong> Rendered and visualized in real time with high-quality lighting and reflections</li>`;

        eleConclusion.innerText = "This project showcases exquisite 3D artistry and design, blending realism and elegance in a virtual space. By leveraging high-end modeling, texturing, and real-time rendering, Luxurious Room Decor sets a new standard for NFT-based interior design concepts, offering a breathtaking digital experience.";

        break;
    case "midnoon-house":
        eleMediaContainer.classList.remove('col-md-4');
        eleMediaContainer.classList.add('col-md-12');
        eleDescriptionContainer.classList.remove('col-md-8');
        eleDescriptionContainer.classList.add('col-md-12');
        eleHeading.innerText = "Midnoon Hillstation View";
        eleVideo.innerHTML = `
        <div id="videoCarousel" class="carousel slide mt-4 w-75" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#videoCarousel" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#videoCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#videoCarousel" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#videoCarousel" data-bs-slide-to="3"></button>
        </div>
        
        <div class="carousel-inner">
            <div class="carousel-item active">
                <video class="d-block w-100" controls autoplay>
                    <source src="./src/assets/videos/midnoon-house/view1.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="carousel-item">
                <video class="d-block w-100" controls>
                    <source src="./src/assets/videos/midnoon-house/view2.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="carousel-item">
                <video class="d-block w-100" controls>
                    <source src="./src/assets/videos/midnoon-house/view3.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="carousel-item">
                <video class="d-block w-100" controls>
                    <source src="./src/assets/videos/midnoon-house/view4.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        
        <button class="carousel-control-prev" type="button" data-bs-target="#videoCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#videoCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
    </div>`;
        eleProjectType.innerText = "3D Environment Modeling | Natural Landscape";
        eleProjectOverview.innerText = "Midnoon Hillstation View is a breathtaking 3D natural landscape, capturing the essence of a serene hill station surrounded by lush greenery, flowing waterfalls, and dynamic lighting effects. This project was designed to create a visually stunning and immersive outdoor environment, blending realism with artistic composition to showcase the beauty of nature. The scene includes realistically modeled trees, stones, and plants, carefully placed to create a harmonious and natural layout. A procedurally generated waterfall adds a dynamic element, featuring realistic water splashes, ripples, and flow patterns. The entire environment is brought to life with cinematic lighting and high-quality rendering in Unreal Engine, ensuring a high level of realism and visual depth.";

        eleKeyFeatures.innerHTML = `
                <li><strong>Lifelike 3D Landscape:</strong> A fully modeled natural environment with realistic vegetation and terrain</li>
                <li><strong>Procedural Water Effects:</strong>  Naigara FX powered waterfall with accurate splashes and ripple effects</li>
                <li><strong>High-Quality Texturing:</strong> Detailed foliage, rock formations, and landscape elements for realism</li>
                <li><strong>Cinematic Lighting & Atmosphere:</strong> Soft sunlight and dynamic shadows for depth and immersion</li>
                <li><strong>Optimized for Real-Time Rendering:</strong> Rendered in Unreal Engine for high-quality visuals</li>`;

        eleTechnicalBreakdown.innerHTML = `
                <li><strong>Maya:</strong> Modeled trees, rocks, plants, and terrain for an organic look</li>
                <li><strong>Substance Painter:</strong> Applied high-resolution textures to foliage and landscape elements</li>
                <li><strong>Unreal Engine:</strong> Handled realistic lighting, shadows, and real-time rendering. Created procedural water textures for the waterfall, splashes, and surface ripples</li>`;

        eleConclusion.innerText = "This project showcases a masterful blend of environment design and procedural effects, bringing the beauty of nature into the digital world. By combining realistic modeling, dynamic water simulations, and advanced lighting techniques, Midnoon Hillstation View delivers an immersive and visually captivating 3D landscape.";

        break;
    case "vr-shooting-game":
        eleMediaContainer.classList.remove('col-md-4');
        eleMediaContainer.classList.add('col-md-6');
        eleDescriptionContainer.classList.remove('col-md-8');
        eleDescriptionContainer.classList.add('col-md-6');
        eleHeading.innerText = "VR Shooting Game";
        eleVideo.innerHTML = `<video controls class="mt-4 w-75" autoplay>
                        <source src="./src/assets/videos/VRgame.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>`;
        eleProjectType.innerText = "3D VR Game Development";
        eleProjectOverview.innerText = "VR Shooting Game is a thrilling first-person virtual reality experience that immerses players in an action-packed sci-fi environment. Designed to push the boundaries of VR gameplay, this project combines realistic weapon mechanics, enemy AI, and an immersive game world to deliver an engaging and interactive experience. Players take on the role of a futuristic soldier, engaging in fast-paced combat against enemy drones inside a high-tech spaceship. The game features realistic hand interactions, detailed weapon models, and a responsive VR environment built with Unreal Engine’s visual scripting for seamless interactivity.";

        eleKeyFeatures.innerHTML = `
                <li><strong>Realistic VR Combat:</strong> Intuitive weapon handling and first-person shooting mechanics</li>
                <li><strong>Engaging Enemy AI:</strong> Drones with dynamic movement and attack patterns</li>
                <li><strong>High-Quality 3D Models:</strong> Detailed weapons, environments, and character hands for realism</li>
                <li><strong>Immersive Visual Effects:</strong> Sci-fi lighting, atmospheric FX, and particle effects</li>
                <li><strong>Optimized for VR:</strong> Smooth frame rates and responsive controls for an engaging experience</li>`;

        eleTechnicalBreakdown.innerHTML = `
                <li><strong>Maya:</strong> Modeled game assets, including enemy drones, weapons, and spaceship elements</li>
                <li><strong>Substance Painter:</strong> Designed detailed textures for weapons, enemies, and environments</li>
                <li><strong>Quixel Bridge:</strong> Integrated high-quality textures for enhanced realism</li>
                <li><strong>Unreal Engine:</strong> Built game mechanics using visual scripting, implemented materials, FX, and lighting, and optimized the environment for a smooth VR experience</li>`;

        eleConclusion.innerText = "This project showcases advanced VR game development techniques, bringing together high-quality 3D modeling, immersive textures, and interactive gameplay mechanics. By leveraging the power of Unreal Engine, VR Shooting Game delivers a fast-paced, action-packed experience that keeps players engaged and immersed in a futuristic world.";

        break;
    default:
        break;
}
