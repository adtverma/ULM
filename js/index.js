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
            header = "History";
            txt = "(HfG - 'School of Design') was a private school of industrial design and visual communication in Ulm, Germany, which opened in 1953 and closed in 1968. The Ulm School of Design (HfG) has a worldwide reputation as the place which, after the Bauhaus, has had the most lasting influence not only on the design of industrially manufactured goods and of services but also on designer training. As a unique private institution the HfG was different from all other contemporary design-focused training centers because its goal was design based on the humanities and natural sciences, rather than traditional design, whose approach is one that relies on artistic intuition.";
            break;
        case 1:
            header = "Ideology";
            txt = "The short fifteen-year existence of the school had a lasting impact on design education through its use of experimental pedagogy and through creating overt relations with industry. Much of the work produced at Ulm, alongside debates taking place within the school, were disseminated in the journal, ulm, published between 1958 and 1968. \
                Founded in the memory of Hans and Sophie Scholl, who were executed by the Nazis as members of the resistance, HfG Ulm was established by their younger sister, Inge Scholl with Otl Aicher and others. Environmental design, as a holistic approach to human habitation, combined with political education was seen as a strategy for strengthening democratic ideals within society.";
            break;
        case 2:
            header = "Courses";
            txt = "Otl Aicher introduced the model of design development which tried to bridge the gap between research and teaching. Development groups were led by staff with student assistants, working with industry partners such as Braun, developing products under market conditions. Yet these collaborations also revealed some of the contradictions underlying the Ulm philosophy, on the one hand a commitment to industrial mass production and on the other a suspicion of industry, which for the need to maximise profits did not always share Ulm's goal of design that promoted social good. \
                HfG Ulm's experimental approach to teaching included the abolishment of departments as traditionally conceived within a university setting; instead disciplines were grouped around topics such as, Industrial Design, Visual Communication, Building, Information, and Film. The system of a large proportion of visiting faculty, four to every permanent member of staff, created an atmosphere of constant re-evaluation and critique, gaining HfG Ulm its reputation as a centre for cutting edge research and teaching in design. Its emphasis on the social responsibility of the designer also helped in the re-orientation of design as an inherently political activity.";
            break;
        case 3:
            header = "Gender Parity";
            txt = "The documentation \"Women at the hfg ulm\" understands itself as a search and securing of traces of all the women that studied, lectured or were members of the staff at the hochschule für gestaltung (hfg ulm). It is a particular and a particularly attractive characteristic of this survey to show the former hfg-women as a part of their group as well as in their totality. \
                The hochschule für gestaltung, founded in 1953 and closed in 1968 is considered as one of the most important teaching experiments in the post-war era not only in Germany. It disclosed new professional fields. It is not possible to separate such an experiment from the persons that taught there and it is not possible to abstain from the students that were willing to undergo this educational scheme. A relatively small number of these were women. Program and training curriculum of this unusual school attracted young persons from very many countries (38); they were not a fortuitous student staff, but individuals with the readiness to tread new paths. 98 of the overall number of 642 students were women. They came from 19 countries.";
            break;
        case 4:
            header = "Relevance Today";
            txt = "At the Ulm School of Design, designers were trained, design took shape, theories of design were elaborated, and methods of design developed. In speaking of the instruction method used at the HfG and the way designers teamed up with technicians and business people, the terms “Ulm model” or “Ulm concept” are used. But the tangible results of work at the HfG – product and information design – have also set a trend: They are said to have a special “Ulm style”. In studying the history of the HfG, one soon gets an unpleasant impression: Facts are treated as if they were mere opinions, and vice versa: instead of an analysis of reality as an aggregate of unassailable, inescapable data, there is flight from reality. Up till now, in discussing the HfG, there has been a dearth of publications that aim at representing the hard facts of its history. One of the simplest notions taught at the HfG is the idea that the result of a project depends on the circumstances under which it was carried out. If external conditions are altered, the output obtained is different. If we want to have a grasp of the HfG’s uniqueness, we need information about its external conditions";
            break;
        case 5:
            header = "Practice Today";
            break;
        case 6:
            header = "Design Kit";
            break;
        case 7:
            header = "Workshops";
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