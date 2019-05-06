function expand(circle, i) {
    showOverlay();
    showBlurb(i);
    
    /*contractAll();
    circle.classList.add("expanded");
    console.log(circle.value);*/
}

function contractAll() {
    var expanded = document.getElementsByClassName("expanded");
    for (let el of expanded) {
        el.classList.remove("expanded");
    }
}

function showOverlay() {
    var overlay = document.getElementById("overlay");
    var bigCircle = document.getElementById("bigCircle");
    overlay.classList.add("fadeIn");
    overlay.style.visibility = "visible";
    bigCircle.style.visibility = "visible";
}

function hideOverlay() {
    var overlay = document.getElementById("overlay");
    var bigCircle = document.getElementById("bigCircle");
    overlay.classList.remove("fadeIn");
    overlay.style.visibility = "hidden";
    bigCircle.style.visibility = "hidden";
    for (let blurb of document.getElementsByClassName("textBlurb")) {
        blurb.style.visibility = "hidden";
    }
}

function showBlurb(i) {
    var header = "undef";
    var txt = "undef";
    
    switch(i) {
        case 0:
            header = "About";
            txt = " This platform is built upon the principles of The Ulm School of Design (HfG), a private school of industrial design and visual communication in Ulm, Germany, which opened in 1953 and closed in 1968. It has a worldwide reputation as the place which, after the Bauhaus, has had the most lasting influence not only on the design of industrially manufactured products but also on designer training. As the forefather of contemporary design thinking, the school was different from all design schools because its goal was design based on the humanities and natural sciences, rather than traditional design, whose approach relies on artistic intuition.";
            break;
        case 1:
            header = "Ideology";
            txt = "The short existence of the school had a lasting impact on design education through its use of experimental pedagogy and through creating overt relations with industry. HfG Ulm's experimental approach to teaching included the abolishment of departments as traditionally conceived within a university setting; instead disciplines were grouped around topics such as, Industrial Design, Visual Communication, Building, Information, and Film. The system of a large proportion of visiting faculty, created an atmosphere of constant re-evaluation and critique, gaining HfG Ulm its reputation as a centre for cutting edge research and teaching in design. Its emphasis on the social responsibility of the designer also helped in the re-orientation of design as an inherently political activity. This platform seeks to build on these ideals to develop a contemporary course structure targeted towards fostering designers and thinkers.";
            break;
        case 2:
            header = "Courses";
            txt = "Based off of HFG Ulm’s model of design development which tried to bridge the gap between research and teaching, Engaging Ulm’s experimental approach to teaching emphasises the social responsibility of the designer to re-orient design as an inherently political and cultural activity. The ULM process of thinking propagates a holistic approach to design and the contexts it situates itself in. Some of the courses offered at the program are: ";
            break;
        case 3:
            header = "Gender Parity";
            txt = "Engaging ULM builds on the legacy of the original program which focused its practice on gender inclusion and diversity. Documentation from the school proves that 98 of the overall number of 642 students were women and they came from 19 countries. This platform seeks to take forward this legacy by promoting courses that are not only conceptualised by women, but theory that demand the gender parity in structured thought.";
            break;
        case 4:
            header = "Relevance Today";
            txt = "At the Ulm School of Design, designers were trained, design took shape, theories of design were elaborated, and methods of design developed. In speaking of the instruction method used at the HfG and the way designers teamed up with technicians and business people, the terms “Ulm model” or “Ulm concept” are used. But the tangible results of work at the HfG – product and information design – have also set a trend: They are said to have a special “Ulm style”.  Some of the research done on the school can be accessed here.";
            break;
        case 5:
            header = "Practice Today";
            break;
        case 6:
            header = "Design Kit";
            break;
        case 7:
            header = "Workshops";
            txt = "Join us for a demonstrative session for our courses in New York City! / 
1. Economics of Misinformation- March 18th, 2019 (11:30-2pm) Tony Hall (BBC Finance Reporter) and Giorgia Lupi (Data Visualiser and Design Researcher) / 
2. Anonimity and Gender Erasure- May 20th, 2019 (6-8pm) Durga Chew Bose (Writer) and Rupi Kaur (Poet) / 
3. A Conversation between the Visual and Discursive: Tavi Gevinson (Youth Media Icon) and Gui Bonsieppe (Designer and Writer)"
            break;
    }
    
    var textBlurb = document.createElement("div");
    textBlurb.classList.add("textBlurb");
    
    var blurbHeader = document.createElement("h3");
    blurbHeader.innerHTML = header;
    textBlurb.appendChild(blurbHeader);
    
    if (txt !== "undef") {
        var blurbText = document.createElement("text");
        blurbText.innerHTML = txt;
        textBlurb.appendChild(blurbText);
    }
    
    document.body.appendChild(textBlurb);    
}
