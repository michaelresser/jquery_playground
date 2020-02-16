console.log('buttonScripts Online');
//Global Functions
//count the boxes in the demo element for the associated button
const countBoxes = (parent) => {
    let numBoxes = $(parent).find('.box').length;
    return numBoxes;
};
 //function to find parent container id of clicked button
const returnParentId = () => {
    let target = $(event.target).parents('.item').attr('id');
    parentId = "#" + target;
    return parentId;
};

//Local Functions
const setTargetInfo = () => {
   
    
    //set the targetInfo object with the dynamic data
    let targetInfo = {};
    targetInfo.parentId = returnParentId();
    targetInfo.demoBox = $(parentId).find('.demo');
    targetInfo.numBoxes = countBoxes(targetInfo.demoBox);
    return targetInfo;
};


$(document).ready(function () {
    //append() button
    $('#appendBtn').click(function () {
        let targetInfo = setTargetInfo();
        targetInfo.demoBox.append("<div class='box'></div>");
        targetInfo.numBoxes = countBoxes(targetInfo.parentId);
        console.info(targetInfo);
    });

    //remove() Function
    $('#removeBtn').click(function (e) {
        let targetInfo = setTargetInfo();
        targetInfo.demoBox.find('.box').last().remove();
        targetInfo.numBoxes = countBoxes(targetInfo.parentId);
        console.info(targetInfo);
    })

    //before() Function
    $('#beforeBtn').click(function () {
        let targetInfo = setTargetInfo();
        targetInfo.demoBox
            .find('#start')
            .before("<div class='box before'></div>");
        targetInfo.numBoxes = countBoxes(targetInfo.parentId);
        console.info(targetInfo);
    })

    //after() Function
    $('#afterBtn').click(function () {
        let targetInfo = setTargetInfo();
        targetInfo.demoBox
            .find('#start')
            .after("<div class='box after'></div>");
        targetInfo.numBoxes = countBoxes(targetInfo.parentId);
        console.info(targetInfo);
    })

    //reset() function
    $('button[name="resetBtn"]').click(function () {
        let targetInfo = setTargetInfo();
        $(targetInfo.parentId).find('.demo')
            .html("<div id='start' class='box'></div>")
        targetInfo.numBoxes = countBoxes();
            console.info(targetInfo.numBoxes);
    })



    //end $(document).ready(){
})

