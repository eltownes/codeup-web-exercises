(function(){
    "use strict";

    const planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    const planetStr1 = planetsArray.join("<br>");
    console.log(planetStr1);

    // Bonus v1
    function createUnorderedList(arr){
        let ulStr = "<ul>";
        for (const elem in arr){
            ulStr += `<li>${arr[elem]}</li>`;
        }
        return ulStr + "</ul>";
    }
    const planetStr2 = createUnorderedList(planetsArray);
    console.log(planetStr2);

    // Bonus v2
    let planetStr3 = "<ul>";
    planetsArray.forEach(elem=> {
        planetStr3 += `<li>${elem}</li>`;
    })
    planetStr3 += "</ul>";
    console.log(planetStr2);


})();
