console.log('buttonScripts Online');
//target parent with class 'item' on button click
let returnItemId = () =>
    $(document).click(function (event) {
        let target = $(event.target).parents('.item');
        console.log(target);
    });

$(document).ready(function () {
    //target parent with class 'item' on button click
    let ItemId = returnItemId();

    //append()+remove()
    let demoBox = itemId.find('.demo');
    let numBoxes = itemId.children('.box').length;
    let appendBtn = $('#append');
    let removeBtn = $('#remove');

    //Enable/Disable Buttons based on box count
    let checkBoxes = (num) => {
        if (num === 0) {
            itemId.find('.remItem').addClass('disabled').prop('disabled', true);
            console.log('remove disabled' + removeBtn);
        } else if (num === 11) {
            $('#append').addClass('disabled').prop('disabled', true);
            console.log('append disabled' + appendBtn);
        } else {
            $('#append').removeClass('disabled').prop('disabled', false);
            removeBtn.removeClass('disabled').prop('disabled', false);
        }
    }

    //append() button
    appendBtn.click(function () {
        demoBox
            .append("<div class='box after'></div>");
        numBoxes = demoBox.children('.box').length;
        console.log(numBoxes)
        checkBoxes(numBoxes);
    });

    //remove() Function
    $('#remove').click(function () {
        demoBox
            .children('.box').last()
            .remove();
        numBoxes = demoBox.children('.box').length;
        console.log(numBoxes);
        checkBoxes(numBoxes);
    })

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

