console.log('buttonScripts Online');


$(document).ready(function () {
    //Function to target parent with class 'item' on button click
    const returnParentItem = () => {
        $('*').click(function () {
            console.log(event.target);
            return item;
        });
    };

    //Function to enable/disable Buttons based on box count
    const countBoxes = () => {
        let numBoxes = $(event.target).parents('.item').find('.box').length;
        return numBoxes;
    };
    //append() button
    $('#appendBtn').click(function () {
        $(event.target)
            .parents('.item')
            .find('.demo')
            .append("<div class='box aftesr'></div>");
        console.log(countBoxes());
    });

    //remove() Function
    $('#removeBtn').click(function () {
        console.log('click');
        $(event.target).parents('.item').find('.box').last().remove();
        console.log(countBoxes());

    });

    //before() Function
    $("#before").click(function () {
        console.log($(this).parent());
        $('#before-after').find('#start')
            .before(" <div class='box before'></div>");
    })

    //after() Function
    $("#after").click(function () {
        $('#before-after').find('#start.box')
            .after(" <div class='box after'></div>");
    })

    //reset() function
    $('#before-after').find('[name="reset"]').click(function () {
        $('#before-after').find('.demo')
            .html("<div id='start' class='box'></div>")
    })



    //end $(document).ready(){
})

