//get modal.json

//get access to id
var s = Snap("#svg");

  $(document).ready(function(e) {
    $.getJSON( "../../../common/models/email.json" , function( result ){
        console.log(result)
    });
  });
        
//modal rectangle...
var drag_title = Snap.parse('<title>Drag and Drop here related model if exist for generate relation inside form</title>');

var block = s.rect(20, 20, 150, 100, 5, 5);
block.attr({
    fill: "rgb(236, 240, 241)",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray': 5
});
block.append(drag_title);


//modal text populate inside modal rect...
var text = s.text(0, 0, "Hello!");
text.attr({
    x: block.node.x.animVal.value + 10,
    y: block.node.y.animVal.value + 20,
    'font-size': 13
});
// line separates modal head and body...
var line = s.line(0, 0, 0, 0);
line.attr({
    x1: block.node.x.animVal.value,
    y1: Number(text.node.attributes.y.nodeValue) + 5,
    x2: block.node.x.animVal.value + block.node.width.animVal.value,
    y2: Number(text.node.attributes.y.nodeValue) + 5,
    stroke: "#1f2c39",
    strokeWidth: 1,
    strokeLinecap: "round"
});

// change coordinates of line and mode1_rect according to text
block.attr({
    width: (Number(text.node.attributes.x.value) + Number(text.node.textContent.length) * 10 + 30)
});
line.attr({
    x2: (block.node.width.animVal.value + block.node.x.animVal.value)
})

//tooltip on checkbox...
var select_title = Snap.parse('<title>Click here to select model for CRUD Operations , if unche3ckied Crud form are not created</title>');

//select box checked when modal form is created
var select = s.rect(0, 0, 15, 15, 2, 2);
select.attr({
    x: (block.node.width.animVal.value + block.node.x.animVal.value - 10),
    y: (block.node.y.animVal.value - 10),
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 2
});
select.append(select_title);

//check symbol inside select box...
var tick_path = "M " + (select.node.x.animVal.value + 3) + " " + (select.node.y.animVal.value + 5) + "L " + (select.node.x.animVal.value + 7) + " " + (select.node.y.animVal.value + 10) + "L " + (select.node.x.animVal.value + select.node.width.animVal.value) + " " + (select.node.y.animVal.value - 3);
var tick = s.path(tick_path)
tick.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

//check and uncheck function on checkbox...
var checked = false;
var selectCheckBox = function () {
    if (!checked) {
        tick.attr({
            display: "block"
        });
        //  crud_opt_group.removeClass('animated bounceOutUp')
        crud_opt_group.attr({
            'display': 'block'
        })
        // crud_opt_group.addClass('animated bounceInUp');
        checked = true;
    } else if (checked) {
        crud_opt_group.attr({
            'display': 'none'
        })
        // crud_opt_group.removeClass('animated bounceInUp');
        // crud_opt_group.addClass('animated bounceOutUp')
        tick.attr({
            display: "none"
        });
        checked = false;
    }
};
select.click(selectCheckBox);
tick.click(selectCheckBox);

//Crud Rect...
var crud_opt = s.rect(0, 0, 80, 90, 5, 5);
crud_opt.attr({
    x: (select.node.x.animVal.value + 15),
    y: (select.node.y.animVal.value + 20),
    fill: "white",
    stroke: "#1f2c39",
    'stroke-dasharray': 10
})

//Crud options inside Crud_opt rect...
var create = s.text(0, 0, "-   create");
create.attr({
    x: (crud_opt.node.x.animVal.value + 5),
    y: (crud_opt.node.y.animVal.value + 20),
    'font-size': 15
});
var listing = s.text(0, 0, "-   Listing");
listing.attr({
    x: (crud_opt.node.x.animVal.value + 5),
    y: (crud_opt.node.y.animVal.value + 40),
    'font-size': 15
});
var update = s.text(0, 0, "-   update");
update.attr({
    x: (crud_opt.node.x.animVal.value + 5),
    y: (crud_opt.node.y.animVal.value + 60),
    'font-size': 15
});
var deleate = s.text(0, 0, "-   delete");
deleate.attr({
    x: (crud_opt.node.x.animVal.value + 5),
    y: (crud_opt.node.y.animVal.value + 80),
    'font-size': 15
});

//check and uncheck Crud options functions...
var createCheckBoxClicked = false;
var createCheckBoxClick = function () {
    if (!createCheckBoxClicked) {
        create_tick.attr({
            display: "block"
        });
        createCheckBoxClicked = true;
    } else if (createCheckBoxClicked) {
        create_tick.attr({
            display: "none"
        });
        createCheckBoxClicked = false;
    }
}

//listing check all three remaining options include listing , delete , edit
var listingCheckBoxClicked = false;
var listingCheckBoxClick = function () {
    if (!listingCheckBoxClicked) {
        listing_tick.attr({
            display: "block"
        });
        update_tick.attr({
            display: "block"
        });
        deleate_tick.attr({
            display: "block"
        });
        listingCheckBoxClicked = true;
    } else if (listingCheckBoxClicked) {
        listing_tick.attr({
            display: "none"
        });
        update_tick.attr({
            display: "none"
        });
        deleate_tick.attr({
            display: "none"
        });
        listingCheckBoxClicked = false;
    }
}

//now set checkboxes on front of Crud operations...
var createCheckBox = s.rect(0, 0, 12, 12, 1, 1);
createCheckBox.attr({
    x: (Number(create.node.attributes.x.nodeValue) + 60),
    y: (create.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
createCheckBox.click(createCheckBoxClick);
var listingCheckBox = s.rect(0, 0, 12, 12, 1, 1);
listingCheckBox.attr({
    x: (Number(listing.node.attributes.x.nodeValue) + 60),
    y: (listing.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
listingCheckBox.click(listingCheckBoxClick);
var updateCheckBox = s.rect(0, 0, 12, 12, 1, 1);
updateCheckBox.attr({
    x: (Number(update.node.attributes.x.nodeValue) + 60),
    y: (update.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
updateCheckBox.click(listingCheckBoxClick);
var deleateCheckBox = s.rect(0, 0, 12, 12, 1, 1);
deleateCheckBox.attr({
    x: (Number(deleate.node.attributes.x.nodeValue) + 60),
    y: (deleate.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
deleateCheckBox.click(listingCheckBoxClick);

//tick inside create check_box...
var create_tick_path = "M " + (createCheckBox.node.x.animVal.value + 1) + " " + (createCheckBox.node.y.animVal.value + 6) + "L " + (createCheckBox.node.x.animVal.value + 5) + " " + (createCheckBox.node.y.animVal.value + 10) + "L " + (createCheckBox.node.x.animVal.value + createCheckBox.node.width.animVal.value) + " " + (createCheckBox.node.y.animVal.value - 2);
var create_tick = s.path(create_tick_path);
create_tick.click(createCheckBoxClick);
create_tick.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside listing check_box...
var listing_tick_path = "M " + (listingCheckBox.node.x.animVal.value + 1) + " " + (listingCheckBox.node.y.animVal.value + 6) + "L " + (listingCheckBox.node.x.animVal.value + 5) + " " + (listingCheckBox.node.y.animVal.value + 10) + "L " + (listingCheckBox.node.x.animVal.value + listingCheckBox.node.width.animVal.value) + " " + (listingCheckBox.node.y.animVal.value - 2);
var listing_tick = s.path(listing_tick_path);
listing_tick.click(listingCheckBoxClick);
listing_tick.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var update_tick_path = "M " + (updateCheckBox.node.x.animVal.value + 1) + " " + (updateCheckBox.node.y.animVal.value + 6) + "L " + (updateCheckBox.node.x.animVal.value + 5) + " " + (updateCheckBox.node.y.animVal.value + 10) + "L " + (updateCheckBox.node.x.animVal.value + updateCheckBox.node.width.animVal.value) + " " + (updateCheckBox.node.y.animVal.value - 2);
var update_tick = s.path(update_tick_path);
update_tick.click(listingCheckBoxClick);
update_tick.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var deleate_tick_path = "M " + (deleateCheckBox.node.x.animVal.value + 1) + " " + (deleateCheckBox.node.y.animVal.value + 6) + "L " + (deleateCheckBox.node.x.animVal.value + 5) + " " + (deleateCheckBox.node.y.animVal.value + 10) + "L " + (deleateCheckBox.node.x.animVal.value + deleateCheckBox.node.width.animVal.value) + " " + (deleateCheckBox.node.y.animVal.value - 2);
var deleate_tick = s.path(deleate_tick_path);
deleate_tick.click(listingCheckBoxClick);
deleate_tick.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

var crud_opt_group = s.group(crud_opt, create, listing, update, deleate, createCheckBox, listingCheckBox, updateCheckBox, deleateCheckBox, create_tick, listing_tick, update_tick, deleate_tick);
crud_opt_group.attr({
    'display': 'none'
})