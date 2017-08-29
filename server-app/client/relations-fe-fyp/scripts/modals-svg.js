//get modal.json


//get access to id
var appiontment = Snap("#appiontment");

//modal rectangle...
var drag_title_appiontment = Snap.parse('<title>Drag and Drop here related model if exist for generate relation inside form</title>');

var block_appiontment = appiontment.rect(20, 20, 150, 100, 5, 5);
block_appiontment.attr({
    fill: "rgb(236, 240, 241)",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray': 5
});
block_appiontment.append(drag_title_appiontment);

var appiontment_rel_path = "M " + (block_appiontment.node.x.animVal.value + block_appiontment.node.width.animVal.value ) + " " + (block_appiontment.node.y.animVal.value + 50) + "H " + (block_appiontment.node.x.animVal.value + block_appiontment.node.width.animVal.value + 100);
var appiontment_rel_path_half = appiontment.path(appiontment_rel_path);
appiontment_rel_path_half.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1
});


//modal text populate inside modal rect...
var text_appiontment = appiontment.text(0, 0, "APPIONTMENT!");
text_appiontment.attr({
    x: block_appiontment.node.x.animVal.value + 10,
    y: block_appiontment.node.y.animVal.value + 20,
    'font-size': 13
});
// line separates modal head and body...
var line_appiontment = appiontment.line(0, 0, 0, 0);
line_appiontment.attr({
    x1: block_appiontment.node.x.animVal.value,
    y1: Number(text_appiontment.node.attributes.y.nodeValue) + 5,
    x2: block_appiontment.node.x.animVal.value + block_appiontment.node.width.animVal.value,
    y2: Number(text_appiontment.node.attributes.y.nodeValue) + 5,
    stroke: "#1f2c39",
    strokeWidth: 1,
    strokeLinecap: "round"
});

// change coordinates of line and mode1_rect according to text
/*block_appiontment.attr({
    width: Number(text_appiontment.node.attributes.x.value) + (Number(text_appiontment.node.textContent.length) * 10 + 30)
});
line_appiontment.attr({
    x2: (block_appiontment.node.width.animVal.value + block_appiontment.node.x.animVal.value)
})*/

//tooltip on checkbox...
var select_title_appiontment = Snap.parse('<title>Click here to select model for CRUD Operations , if unchecked Crud form are not created</title>');

//select box checked when modal form is created
var select_appiontment = appiontment.rect(0, 0, 15, 15, 2, 2);
select_appiontment.attr({
    x: (block_appiontment.node.width.animVal.value + block_appiontment.node.x.animVal.value - 10),
    y: (block_appiontment.node.y.animVal.value - 10),
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 2
});
select_appiontment.append(select_title_appiontment);

//check symbol inside select box...
var tick_path_appiontment = "M " + (select_appiontment.node.x.animVal.value + 3) + " " + (select_appiontment.node.y.animVal.value + 5) + "L " + (select_appiontment.node.x.animVal.value + 7) + " " + (select_appiontment.node.y.animVal.value + 10) + "L " + (select_appiontment.node.x.animVal.value + select_appiontment.node.width.animVal.value) + " " + (select_appiontment.node.y.animVal.value - 3);
var tick_appiontment = appiontment.path(tick_path_appiontment)
tick_appiontment.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

//check and uncheck function on checkbox...
var checked_appiontment = false;
var selectCheckBox_appiontment = function () {
    if (!checked_appiontment) {
        //  crud_opt_group.removeClass('animated bounceOutUp')
        crud_opt_group_appiontment.attr({
            'display': 'block'
        })

        tick_appiontment.attr({ display : "block"});
        // crud_opt_group_appiontment.addClass('animated bounceInUp');
        checked_appiontment = true;
    } else if (checked_appiontment) {
        crud_opt_group_appiontment.attr({
            'display': 'none'
        })
        tick_appiontment.attr({ display : "none"});
        // crud_opt_group.removeClass('animated bounceInUp');
        // crud_opt_group.addClass('animated bounceOutUp')
        checked_appiontment = false;
    }
};
select_appiontment.click(selectCheckBox_appiontment);
tick_appiontment.click(selectCheckBox_appiontment);

//Crud Rect...
var crud_opt_appiontment = appiontment.rect(0, 0, 80, 90, 5, 5);
crud_opt_appiontment.attr({
    x: (select_appiontment.node.x.animVal.value + 15),
    y: (select_appiontment.node.y.animVal.value + 20),
    fill: "white",
    stroke: "#1f2c39",
    'stroke-dasharray': 10
})

//Crud options inside Crud_opt rect...
var create_appiontment = appiontment.text(0, 0, "-   create");
create_appiontment.attr({
    x: (crud_opt_appiontment.node.x.animVal.value + 5),
    y: (crud_opt_appiontment.node.y.animVal.value + 20),
    'font-size': 15
});
var listing_appiontment = appiontment.text(0, 0, "-   Listing");
listing_appiontment.attr({
    x: (crud_opt_appiontment.node.x.animVal.value + 5),
    y: (crud_opt_appiontment.node.y.animVal.value + 40),
    'font-size': 15
});
var update_appiontment = appiontment.text(0, 0, "-   update");
update_appiontment.attr({
    x: (crud_opt_appiontment.node.x.animVal.value + 5),
    y: (crud_opt_appiontment.node.y.animVal.value + 60),
    'font-size': 15
});
var deleate_appiontment = appiontment.text(0, 0, "-   delete");
deleate_appiontment.attr({
    x: (crud_opt_appiontment.node.x.animVal.value + 5),
    y: (crud_opt_appiontment.node.y.animVal.value + 80),
    'font-size': 15
});

//check and uncheck Crud options functions...
var createCheckBoxClicked_appiontment = false;
var createCheckBoxClick_appiontment = function () {
    if (!createCheckBoxClicked_appiontment) {
        create_tick_appiontment.attr({
            display: "block"
        });
        createCheckBoxClicked_appiontment = true;
    } else if (createCheckBoxClicked_appiontment) {
        create_tick_appiontment.attr({
            display: "none"
        });
        createCheckBoxClicked_appiontment = false;
    }
}

//listing check all three remaining options include listing , delete , edit
var listingCheckBoxClicked_appiontment = false;
var listingCheckBoxClick_appiontment = function () {
    if (!listingCheckBoxClicked_appiontment) {
        listing_tick_appiontment.attr({
            display: "block"
        });
        update_tick_appiontment.attr({
            display: "block"
        });
        deleate_tick_appiontment.attr({
            display: "block"
        });
        listingCheckBoxClicked_appiontment = true;
    } else if (listingCheckBoxClicked_appiontment) {
        listing_tick_appiontment.attr({
            display: "none"
        });
        update_tick_appiontment.attr({
            display: "none"
        });
        deleate_tick_appiontment.attr({
            display: "none"
        });
        listingCheckBoxClicked_appiontment = false;
    }
}

//now set checkboxes on front of Crud operations...
var createCheckBox_appiontment = appiontment.rect(0, 0, 12, 12, 1, 1);
createCheckBox_appiontment.attr({
    x: (Number(create_appiontment.node.attributes.x.nodeValue) + 60),
    y: (create_appiontment.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
createCheckBox_appiontment.click(createCheckBoxClick_appiontment);
var listingCheckBox_appiontment = appiontment.rect(0, 0, 12, 12, 1, 1);
listingCheckBox_appiontment.attr({
    x: (Number(listing_appiontment.node.attributes.x.nodeValue) + 60),
    y: (listing_appiontment.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
listingCheckBox_appiontment.click(listingCheckBoxClick_appiontment);
var updateCheckBox_appiontment = appiontment.rect(0, 0, 12, 12, 1, 1);
updateCheckBox_appiontment.attr({
    x: (Number(update_appiontment.node.attributes.x.nodeValue) + 60),
    y: (update_appiontment.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
updateCheckBox_appiontment.click(listingCheckBoxClick_appiontment);
var deleateCheckBox_appiontment = appiontment.rect(0, 0, 12, 12, 1, 1);
deleateCheckBox_appiontment.attr({
    x: (Number(deleate_appiontment.node.attributes.x.nodeValue) + 60),
    y: (deleate_appiontment.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
deleateCheckBox_appiontment.click(listingCheckBoxClick_appiontment);

//tick inside create check_box...
var create_tick_path_appiontment = "M " + (createCheckBox_appiontment.node.x.animVal.value + 1) + " " + (createCheckBox_appiontment.node.y.animVal.value + 6) + "L " + (createCheckBox_appiontment.node.x.animVal.value + 5) + " " + (createCheckBox_appiontment.node.y.animVal.value + 10) + "L " + (createCheckBox_appiontment.node.x.animVal.value + createCheckBox_appiontment.node.width.animVal.value) + " " + (createCheckBox_appiontment.node.y.animVal.value - 2);
var create_tick_appiontment = appiontment.path(create_tick_path_appiontment);
create_tick_appiontment.click(createCheckBoxClick_appiontment);
create_tick_appiontment.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside listing check_box...
var listing_tick_path_appiontment = "M " + (listingCheckBox_appiontment.node.x.animVal.value + 1) + " " + (listingCheckBox_appiontment.node.y.animVal.value + 6) + "L " + (listingCheckBox_appiontment.node.x.animVal.value + 5) + " " + (listingCheckBox_appiontment.node.y.animVal.value + 10) + "L " + (listingCheckBox_appiontment.node.x.animVal.value + listingCheckBox_appiontment.node.width.animVal.value) + " " + (listingCheckBox_appiontment.node.y.animVal.value - 2);
var listing_tick_appiontment = appiontment.path(listing_tick_path_appiontment);
listing_tick_appiontment.click(listingCheckBoxClick_appiontment);
listing_tick_appiontment.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var update_tick_path_appiontment = "M " + (updateCheckBox_appiontment.node.x.animVal.value + 1) + " " + (updateCheckBox_appiontment.node.y.animVal.value + 6) + "L " + (updateCheckBox_appiontment.node.x.animVal.value + 5) + " " + (updateCheckBox_appiontment.node.y.animVal.value + 10) + "L " + (updateCheckBox_appiontment.node.x.animVal.value + updateCheckBox_appiontment.node.width.animVal.value) + " " + (updateCheckBox_appiontment.node.y.animVal.value - 2);
var update_tick_appiontment = appiontment.path(update_tick_path_appiontment);
update_tick_appiontment.click(listingCheckBoxClick_appiontment);
update_tick_appiontment.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var deleate_tick_path_appiontment = "M " + (deleateCheckBox_appiontment.node.x.animVal.value + 1) + " " + (deleateCheckBox_appiontment.node.y.animVal.value + 6) + "L " + (deleateCheckBox_appiontment.node.x.animVal.value + 5) + " " + (deleateCheckBox_appiontment.node.y.animVal.value + 10) + "L " + (deleateCheckBox_appiontment.node.x.animVal.value + deleateCheckBox_appiontment.node.width.animVal.value) + " " + (deleateCheckBox_appiontment.node.y.animVal.value - 2);
var deleate_tick_appiontment = appiontment.path(deleate_tick_path_appiontment);
deleate_tick_appiontment.click(listingCheckBoxClick_appiontment);
deleate_tick_appiontment.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

var crud_opt_group_appiontment = appiontment.group(crud_opt_appiontment, create_appiontment, listing_appiontment, update_appiontment, deleate_appiontment, createCheckBox_appiontment, listingCheckBox_appiontment, updateCheckBox_appiontment, deleateCheckBox_appiontment, create_tick_appiontment, listing_tick_appiontment, update_tick_appiontment, deleate_tick_appiontment);
crud_opt_group_appiontment.attr({
    'display': 'none'
})
//relative modals svg...

var doctor_hasOne0 = Snap("#appiontment");

//modal rectangle...
var drag_title_doctor_hasOne0 = Snap.parse('<title>Drag and Drop here related model if exist for generate relation inside form</title>');

var block_doctor_hasOne0 = doctor_hasOne0.rect(20, 20, 150, 100, 5, 5);
block_doctor_hasOne0.attr({
    x: (block_appiontment.node.x.animVal.value + block_appiontment.node.width.animVal.value + 200),
    width : (block_appiontment.node.width.animVal.value),
    fill: "rgb(236, 240, 241)",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray': 5 
});


block_doctor_hasOne0.append(drag_title_doctor_hasOne0);


//modal text populate inside modal rect...
var text_doctor_hasOne0 = doctor_hasOne0.text(0, 0, "DOCTOR!");
text_doctor_hasOne0.attr({
    x: block_doctor_hasOne0.node.x.animVal.value + 10,
    y: block_doctor_hasOne0.node.y.animVal.value + 20,
    'font-size': 13
});
// line separates modal head and body...
var line_doctor_hasOne0 = doctor_hasOne0.line(0, 0, 0, 0);
line_doctor_hasOne0.attr({
    x1: block_doctor_hasOne0.node.x.animVal.value,
    y1: Number(text_doctor_hasOne0.node.attributes.y.nodeValue) + 5,
    x2: block_doctor_hasOne0.node.x.animVal.value + block_doctor_hasOne0.node.width.animVal.value,
    y2: Number(text_doctor_hasOne0.node.attributes.y.nodeValue) + 5,
    stroke: "#1f2c39",
    strokeWidth: 1,
    strokeLinecap: "round"
});

// change coordinates of line and mode1_rect according to text
/*<!--block_doctor_hasOne0.attr({
    width: Number(text_doctor_hasOne0.node.attributes.x.value) + (Number(text_doctor_hasOne0.node.textContent.length) * 10 + 30)
});
line_doctor_hasOne0.attr({
    x2: (block_doctor_hasOne0.node.width.animVal.value + block_doctor_hasOne0.node.x.animVal.value)
})-->*/

//tooltip on checkbox...
var select_title_doctor_hasOne0 = Snap.parse('<title>Click here to select model for CRUD Operations , if unchecked Crud form are not created</title>');

//select box checked when modal form is created
var select_doctor_hasOne0 = doctor_hasOne0.rect(0, 0, 15, 15, 2, 2);
select_doctor_hasOne0.attr({
    x: (block_doctor_hasOne0.node.width.animVal.value + block_doctor_hasOne0.node.x.animVal.value - 10),
    y: (block_doctor_hasOne0.node.y.animVal.value - 10),
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 2
});
select_doctor_hasOne0.append(select_title_doctor_hasOne0);

//check symbol inside select box...
var tick_path_doctor_hasOne0 = "M " + (select_doctor_hasOne0.node.x.animVal.value + 3) + " " + (select_doctor_hasOne0.node.y.animVal.value + 5) + "L " + (select_doctor_hasOne0.node.x.animVal.value + 7) + " " + (select_doctor_hasOne0.node.y.animVal.value + 10) + "L " + (select_doctor_hasOne0.node.x.animVal.value + select_doctor_hasOne0.node.width.animVal.value) + " " + (select_doctor_hasOne0.node.y.animVal.value - 3);
var tick_doctor_hasOne0 = doctor_hasOne0.path(tick_path_doctor_hasOne0)
tick_doctor_hasOne0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

//check and uncheck function on checkbox...
var checked_doctor_hasOne0 = false;
var selectCheckBox_doctor_hasOne0 = function () {
    if (!checked_doctor_hasOne0) {
        crud_opt_group_doctor_hasOne0.attr({
            'display': 'block'
        })
        tick_doctor_hasOne0.attr({ display : "block"});
        block_doctor_hasOne0.attr({ x : (block_appiontment.node.x.animVal.value + block_appiontment.node.width.animVal.value + 200)});
        checked_doctor_hasOne0 = true;
    } else if (checked_doctor_hasOne0) {
        crud_opt_group_doctor_hasOne0.attr({
            'display': 'none'
        })
        tick_doctor_hasOne0.attr({ display : "none"});
        checked_doctor_hasOne0 = false;
    }
};
select_doctor_hasOne0.click(selectCheckBox_doctor_hasOne0);
tick_doctor_hasOne0.click(selectCheckBox_doctor_hasOne0);

//Crud Rect...
var crud_opt_doctor_hasOne0 = doctor_hasOne0.rect(0, 0, 80, 90, 5, 5);
crud_opt_doctor_hasOne0.attr({
    x: (select_doctor_hasOne0.node.x.animVal.value + 15),
    y: (select_doctor_hasOne0.node.y.animVal.value + 20),
    fill: "white",
    stroke: "#1f2c39",
    'stroke-dasharray': 10
})

//Crud options inside Crud_opt rect...
var create_doctor_hasOne0 = doctor_hasOne0.text(0, 0, "-   create");
create_doctor_hasOne0.attr({
    x: (crud_opt_doctor_hasOne0.node.x.animVal.value + 5),
    y: (crud_opt_doctor_hasOne0.node.y.animVal.value + 20),
    'font-size': 15
});
var listing_doctor_hasOne0 = doctor_hasOne0.text(0, 0, "-   Listing");
listing_doctor_hasOne0.attr({
    x: (crud_opt_doctor_hasOne0.node.x.animVal.value + 5),
    y: (crud_opt_doctor_hasOne0.node.y.animVal.value + 40),
    'font-size': 15
});
var update_doctor_hasOne0 = doctor_hasOne0.text(0, 0, "-   update");
update_doctor_hasOne0.attr({
    x: (crud_opt_doctor_hasOne0.node.x.animVal.value + 5),
    y: (crud_opt_doctor_hasOne0.node.y.animVal.value + 60),
    'font-size': 15
});
var deleate_doctor_hasOne0 = doctor_hasOne0.text(0, 0, "-   delete");
deleate_doctor_hasOne0.attr({
    x: (crud_opt_doctor_hasOne0.node.x.animVal.value + 5),
    y: (crud_opt_doctor_hasOne0.node.y.animVal.value + 80),
    'font-size': 15
});

//check and uncheck Crud options functions...
var createCheckBoxClicked_doctor_hasOne0 = false;
var createCheckBoxClick_doctor_hasOne0 = function () {
    if (!createCheckBoxClicked_doctor_hasOne0) {
        create_tick_doctor_hasOne0.attr({
            display: "block"
        });
        createCheckBoxClicked_doctor_hasOne0 = true;
    } else if (createCheckBoxClicked_doctor_hasOne0) {
        create_tick_doctor_hasOne0.attr({
            display: "none"
        });
        createCheckBoxClicked_doctor_hasOne0 = false;
    }
}

//listing check all three remaining options include listing , delete , edit
var listingCheckBoxClicked_doctor_hasOne0 = false;
var listingCheckBoxClick_doctor_hasOne0 = function () {
    if (!listingCheckBoxClicked_doctor_hasOne0) {
        listing_tick_doctor_hasOne0.attr({
            display: "block"
        });
        update_tick_doctor_hasOne0.attr({
            display: "block"
        });
        deleate_tick_doctor_hasOne0.attr({
            display: "block"
        });
        listingCheckBoxClicked_doctor_hasOne0 = true;
    } else if (listingCheckBoxClicked_doctor_hasOne0) {
        listing_tick_doctor_hasOne0.attr({
            display: "none"
        });
        update_tick_doctor_hasOne0.attr({
            display: "none"
        });
        deleate_tick_doctor_hasOne0.attr({
            display: "none"
        });
        listingCheckBoxClicked_doctor_hasOne0 = false;
    }
}

//now set checkboxes on front of Crud operations...
var createCheckBox_doctor_hasOne0 = doctor_hasOne0.rect(0, 0, 12, 12, 1, 1);
createCheckBox_doctor_hasOne0.attr({
    x: (Number(create_doctor_hasOne0.node.attributes.x.nodeValue) + 60),
    y: (create_doctor_hasOne0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
createCheckBox_doctor_hasOne0.click(createCheckBoxClick_doctor_hasOne0);
var listingCheckBox_doctor_hasOne0 = doctor_hasOne0.rect(0, 0, 12, 12, 1, 1);
listingCheckBox_doctor_hasOne0.attr({
    x: (Number(listing_doctor_hasOne0.node.attributes.x.nodeValue) + 60),
    y: (listing_doctor_hasOne0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
listingCheckBox_doctor_hasOne0.click(listingCheckBoxClick_doctor_hasOne0);
var updateCheckBox_doctor_hasOne0 = doctor_hasOne0.rect(0, 0, 12, 12, 1, 1);
updateCheckBox_doctor_hasOne0.attr({
    x: (Number(update_doctor_hasOne0.node.attributes.x.nodeValue) + 60),
    y: (update_doctor_hasOne0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
updateCheckBox_doctor_hasOne0.click(listingCheckBoxClick_doctor_hasOne0);
var deleateCheckBox_doctor_hasOne0 = doctor_hasOne0.rect(0, 0, 12, 12, 1, 1);
deleateCheckBox_doctor_hasOne0.attr({
    x: (Number(deleate_doctor_hasOne0.node.attributes.x.nodeValue) + 60),
    y: (deleate_doctor_hasOne0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
deleateCheckBox_doctor_hasOne0.click(listingCheckBoxClick_doctor_hasOne0);

//tick inside create check_box...
var create_tick_path_doctor_hasOne0 = "M " + (createCheckBox_doctor_hasOne0.node.x.animVal.value + 1) + " " + (createCheckBox_doctor_hasOne0.node.y.animVal.value + 6) + "L " + (createCheckBox_doctor_hasOne0.node.x.animVal.value + 5) + " " + (createCheckBox_doctor_hasOne0.node.y.animVal.value + 10) + "L " + (createCheckBox_doctor_hasOne0.node.x.animVal.value + createCheckBox_doctor_hasOne0.node.width.animVal.value) + " " + (createCheckBox_doctor_hasOne0.node.y.animVal.value - 2);
var create_tick_doctor_hasOne0 = doctor_hasOne0.path(create_tick_path_doctor_hasOne0);
create_tick_doctor_hasOne0.click(createCheckBoxClick_doctor_hasOne0);
create_tick_doctor_hasOne0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside listing check_box...
var listing_tick_path_doctor_hasOne0 = "M " + (listingCheckBox_doctor_hasOne0.node.x.animVal.value + 1) + " " + (listingCheckBox_doctor_hasOne0.node.y.animVal.value + 6) + "L " + (listingCheckBox_doctor_hasOne0.node.x.animVal.value + 5) + " " + (listingCheckBox_doctor_hasOne0.node.y.animVal.value + 10) + "L " + (listingCheckBox_doctor_hasOne0.node.x.animVal.value + listingCheckBox_doctor_hasOne0.node.width.animVal.value) + " " + (listingCheckBox_doctor_hasOne0.node.y.animVal.value - 2);
var listing_tick_doctor_hasOne0 = doctor_hasOne0.path(listing_tick_path_doctor_hasOne0);
listing_tick_doctor_hasOne0.click(listingCheckBoxClick_doctor_hasOne0);
listing_tick_doctor_hasOne0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var update_tick_path_doctor_hasOne0 = "M " + (updateCheckBox_doctor_hasOne0.node.x.animVal.value + 1) + " " + (updateCheckBox_doctor_hasOne0.node.y.animVal.value + 6) + "L " + (updateCheckBox_doctor_hasOne0.node.x.animVal.value + 5) + " " + (updateCheckBox_doctor_hasOne0.node.y.animVal.value + 10) + "L " + (updateCheckBox_doctor_hasOne0.node.x.animVal.value + updateCheckBox_doctor_hasOne0.node.width.animVal.value) + " " + (updateCheckBox_doctor_hasOne0.node.y.animVal.value - 2);
var update_tick_doctor_hasOne0 = doctor_hasOne0.path(update_tick_path_doctor_hasOne0);
update_tick_doctor_hasOne0.click(listingCheckBoxClick_doctor_hasOne0);
update_tick_doctor_hasOne0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var deleate_tick_path_doctor_hasOne0 = "M " + (deleateCheckBox_doctor_hasOne0.node.x.animVal.value + 1) + " " + (deleateCheckBox_doctor_hasOne0.node.y.animVal.value + 6) + "L " + (deleateCheckBox_doctor_hasOne0.node.x.animVal.value + 5) + " " + (deleateCheckBox_doctor_hasOne0.node.y.animVal.value + 10) + "L " + (deleateCheckBox_doctor_hasOne0.node.x.animVal.value + deleateCheckBox_doctor_hasOne0.node.width.animVal.value) + " " + (deleateCheckBox_doctor_hasOne0.node.y.animVal.value - 2);
var deleate_tick_doctor_hasOne0 = doctor_hasOne0.path(deleate_tick_path_doctor_hasOne0);
deleate_tick_doctor_hasOne0.click(listingCheckBoxClick_doctor_hasOne0);
deleate_tick_doctor_hasOne0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

var crud_opt_group_doctor_hasOne0 = doctor_hasOne0.group(crud_opt_doctor_hasOne0, create_doctor_hasOne0, listing_doctor_hasOne0, update_doctor_hasOne0, deleate_doctor_hasOne0, createCheckBox_doctor_hasOne0, listingCheckBox_doctor_hasOne0, updateCheckBox_doctor_hasOne0, deleateCheckBox_doctor_hasOne0, create_tick_doctor_hasOne0, listing_tick_doctor_hasOne0, update_tick_doctor_hasOne0, deleate_tick_doctor_hasOne0);
crud_opt_group_doctor_hasOne0.attr({
    'display': 'none'
})

var appiontmentToDoctorPath = "M " + (block_appiontment.node.x.animVal.value + block_appiontment.node.width.animVal.value + 100) + " " + (block_appiontment.node.y.animVal.value + 50) + "V " +  (block_doctor_hasOne0.node.y.animVal.value + 50) + "H " +  (block_doctor_hasOne0.node.x.animVal.value); 


var appiontmentToDoctor = appiontment.path(appiontmentToDoctorPath);
appiontmentToDoctor.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1
})

//polygon {Arrow at end of line toward related model}
var appiontmentToDoctorArrowPoints = [block_doctor_hasOne0.node.x.animVal.value,(block_doctor_hasOne0.node.y.animVal.value+50),(block_doctor_hasOne0.node.x.animVal.value-10),(block_doctor_hasOne0.node.y.animVal.value+50-10),(block_doctor_hasOne0.node.x.animVal.value-10),(block_doctor_hasOne0.node.y.animVal.value+50+10)];
var appiontmentToDoctorArrow = appiontment.polygon(appiontmentToDoctorArrowPoints);
appiontmentToDoctorArrow.attr({
    fill: "#1f2c39",
    stroke: "#1f2c39",
    strokeWidth: 1,
});


var patient_hasOne1 = Snap("#appiontment");

//modal rectangle...
var drag_title_patient_hasOne1 = Snap.parse('<title>Drag and Drop here related model if exist for generate relation inside form</title>');

var block_patient_hasOne1 = patient_hasOne1.rect(20, 20, 150, 100, 5, 5);
block_patient_hasOne1.attr({
    x: (block_appiontment.node.x.animVal.value + block_appiontment.node.width.animVal.value + 200),
    width : (block_appiontment.node.width.animVal.value),
    fill: "rgb(236, 240, 241)",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray': 5 
});


    block_patient_hasOne1.attr({
        y: (block_doctor_hasOne0.node.y.animVal.value + block_doctor_hasOne0.node.height.animVal.value + 20)
    });

block_patient_hasOne1.append(drag_title_patient_hasOne1);


//modal text populate inside modal rect...
var text_patient_hasOne1 = patient_hasOne1.text(0, 0, "PATIENT!");
text_patient_hasOne1.attr({
    x: block_patient_hasOne1.node.x.animVal.value + 10,
    y: block_patient_hasOne1.node.y.animVal.value + 20,
    'font-size': 13
});
// line separates modal head and body...
var line_patient_hasOne1 = patient_hasOne1.line(0, 0, 0, 0);
line_patient_hasOne1.attr({
    x1: block_patient_hasOne1.node.x.animVal.value,
    y1: Number(text_patient_hasOne1.node.attributes.y.nodeValue) + 5,
    x2: block_patient_hasOne1.node.x.animVal.value + block_patient_hasOne1.node.width.animVal.value,
    y2: Number(text_patient_hasOne1.node.attributes.y.nodeValue) + 5,
    stroke: "#1f2c39",
    strokeWidth: 1,
    strokeLinecap: "round"
});

// change coordinates of line and mode1_rect according to text
/*<!--block_patient_hasOne1.attr({
    width: Number(text_patient_hasOne1.node.attributes.x.value) + (Number(text_patient_hasOne1.node.textContent.length) * 10 + 30)
});
line_patient_hasOne1.attr({
    x2: (block_patient_hasOne1.node.width.animVal.value + block_patient_hasOne1.node.x.animVal.value)
})-->*/

//tooltip on checkbox...
var select_title_patient_hasOne1 = Snap.parse('<title>Click here to select model for CRUD Operations , if unchecked Crud form are not created</title>');

//select box checked when modal form is created
var select_patient_hasOne1 = patient_hasOne1.rect(0, 0, 15, 15, 2, 2);
select_patient_hasOne1.attr({
    x: (block_patient_hasOne1.node.width.animVal.value + block_patient_hasOne1.node.x.animVal.value - 10),
    y: (block_patient_hasOne1.node.y.animVal.value - 10),
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 2
});
select_patient_hasOne1.append(select_title_patient_hasOne1);

//check symbol inside select box...
var tick_path_patient_hasOne1 = "M " + (select_patient_hasOne1.node.x.animVal.value + 3) + " " + (select_patient_hasOne1.node.y.animVal.value + 5) + "L " + (select_patient_hasOne1.node.x.animVal.value + 7) + " " + (select_patient_hasOne1.node.y.animVal.value + 10) + "L " + (select_patient_hasOne1.node.x.animVal.value + select_patient_hasOne1.node.width.animVal.value) + " " + (select_patient_hasOne1.node.y.animVal.value - 3);
var tick_patient_hasOne1 = patient_hasOne1.path(tick_path_patient_hasOne1)
tick_patient_hasOne1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

//check and uncheck function on checkbox...
var checked_patient_hasOne1 = false;
var selectCheckBox_patient_hasOne1 = function () {
    if (!checked_patient_hasOne1) {
        crud_opt_group_patient_hasOne1.attr({
            'display': 'block'
        })
        tick_patient_hasOne1.attr({ display : "block"});
        block_patient_hasOne1.attr({ x : (block_appiontment.node.x.animVal.value + block_appiontment.node.width.animVal.value + 200)});
        checked_patient_hasOne1 = true;
    } else if (checked_patient_hasOne1) {
        crud_opt_group_patient_hasOne1.attr({
            'display': 'none'
        })
        tick_patient_hasOne1.attr({ display : "none"});
        checked_patient_hasOne1 = false;
    }
};
select_patient_hasOne1.click(selectCheckBox_patient_hasOne1);
tick_patient_hasOne1.click(selectCheckBox_patient_hasOne1);

//Crud Rect...
var crud_opt_patient_hasOne1 = patient_hasOne1.rect(0, 0, 80, 90, 5, 5);
crud_opt_patient_hasOne1.attr({
    x: (select_patient_hasOne1.node.x.animVal.value + 15),
    y: (select_patient_hasOne1.node.y.animVal.value + 20),
    fill: "white",
    stroke: "#1f2c39",
    'stroke-dasharray': 10
})

//Crud options inside Crud_opt rect...
var create_patient_hasOne1 = patient_hasOne1.text(0, 0, "-   create");
create_patient_hasOne1.attr({
    x: (crud_opt_patient_hasOne1.node.x.animVal.value + 5),
    y: (crud_opt_patient_hasOne1.node.y.animVal.value + 20),
    'font-size': 15
});
var listing_patient_hasOne1 = patient_hasOne1.text(0, 0, "-   Listing");
listing_patient_hasOne1.attr({
    x: (crud_opt_patient_hasOne1.node.x.animVal.value + 5),
    y: (crud_opt_patient_hasOne1.node.y.animVal.value + 40),
    'font-size': 15
});
var update_patient_hasOne1 = patient_hasOne1.text(0, 0, "-   update");
update_patient_hasOne1.attr({
    x: (crud_opt_patient_hasOne1.node.x.animVal.value + 5),
    y: (crud_opt_patient_hasOne1.node.y.animVal.value + 60),
    'font-size': 15
});
var deleate_patient_hasOne1 = patient_hasOne1.text(0, 0, "-   delete");
deleate_patient_hasOne1.attr({
    x: (crud_opt_patient_hasOne1.node.x.animVal.value + 5),
    y: (crud_opt_patient_hasOne1.node.y.animVal.value + 80),
    'font-size': 15
});

//check and uncheck Crud options functions...
var createCheckBoxClicked_patient_hasOne1 = false;
var createCheckBoxClick_patient_hasOne1 = function () {
    if (!createCheckBoxClicked_patient_hasOne1) {
        create_tick_patient_hasOne1.attr({
            display: "block"
        });
        createCheckBoxClicked_patient_hasOne1 = true;
    } else if (createCheckBoxClicked_patient_hasOne1) {
        create_tick_patient_hasOne1.attr({
            display: "none"
        });
        createCheckBoxClicked_patient_hasOne1 = false;
    }
}

//listing check all three remaining options include listing , delete , edit
var listingCheckBoxClicked_patient_hasOne1 = false;
var listingCheckBoxClick_patient_hasOne1 = function () {
    if (!listingCheckBoxClicked_patient_hasOne1) {
        listing_tick_patient_hasOne1.attr({
            display: "block"
        });
        update_tick_patient_hasOne1.attr({
            display: "block"
        });
        deleate_tick_patient_hasOne1.attr({
            display: "block"
        });
        listingCheckBoxClicked_patient_hasOne1 = true;
    } else if (listingCheckBoxClicked_patient_hasOne1) {
        listing_tick_patient_hasOne1.attr({
            display: "none"
        });
        update_tick_patient_hasOne1.attr({
            display: "none"
        });
        deleate_tick_patient_hasOne1.attr({
            display: "none"
        });
        listingCheckBoxClicked_patient_hasOne1 = false;
    }
}

//now set checkboxes on front of Crud operations...
var createCheckBox_patient_hasOne1 = patient_hasOne1.rect(0, 0, 12, 12, 1, 1);
createCheckBox_patient_hasOne1.attr({
    x: (Number(create_patient_hasOne1.node.attributes.x.nodeValue) + 60),
    y: (create_patient_hasOne1.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
createCheckBox_patient_hasOne1.click(createCheckBoxClick_patient_hasOne1);
var listingCheckBox_patient_hasOne1 = patient_hasOne1.rect(0, 0, 12, 12, 1, 1);
listingCheckBox_patient_hasOne1.attr({
    x: (Number(listing_patient_hasOne1.node.attributes.x.nodeValue) + 60),
    y: (listing_patient_hasOne1.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
listingCheckBox_patient_hasOne1.click(listingCheckBoxClick_patient_hasOne1);
var updateCheckBox_patient_hasOne1 = patient_hasOne1.rect(0, 0, 12, 12, 1, 1);
updateCheckBox_patient_hasOne1.attr({
    x: (Number(update_patient_hasOne1.node.attributes.x.nodeValue) + 60),
    y: (update_patient_hasOne1.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
updateCheckBox_patient_hasOne1.click(listingCheckBoxClick_patient_hasOne1);
var deleateCheckBox_patient_hasOne1 = patient_hasOne1.rect(0, 0, 12, 12, 1, 1);
deleateCheckBox_patient_hasOne1.attr({
    x: (Number(deleate_patient_hasOne1.node.attributes.x.nodeValue) + 60),
    y: (deleate_patient_hasOne1.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
deleateCheckBox_patient_hasOne1.click(listingCheckBoxClick_patient_hasOne1);

//tick inside create check_box...
var create_tick_path_patient_hasOne1 = "M " + (createCheckBox_patient_hasOne1.node.x.animVal.value + 1) + " " + (createCheckBox_patient_hasOne1.node.y.animVal.value + 6) + "L " + (createCheckBox_patient_hasOne1.node.x.animVal.value + 5) + " " + (createCheckBox_patient_hasOne1.node.y.animVal.value + 10) + "L " + (createCheckBox_patient_hasOne1.node.x.animVal.value + createCheckBox_patient_hasOne1.node.width.animVal.value) + " " + (createCheckBox_patient_hasOne1.node.y.animVal.value - 2);
var create_tick_patient_hasOne1 = patient_hasOne1.path(create_tick_path_patient_hasOne1);
create_tick_patient_hasOne1.click(createCheckBoxClick_patient_hasOne1);
create_tick_patient_hasOne1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside listing check_box...
var listing_tick_path_patient_hasOne1 = "M " + (listingCheckBox_patient_hasOne1.node.x.animVal.value + 1) + " " + (listingCheckBox_patient_hasOne1.node.y.animVal.value + 6) + "L " + (listingCheckBox_patient_hasOne1.node.x.animVal.value + 5) + " " + (listingCheckBox_patient_hasOne1.node.y.animVal.value + 10) + "L " + (listingCheckBox_patient_hasOne1.node.x.animVal.value + listingCheckBox_patient_hasOne1.node.width.animVal.value) + " " + (listingCheckBox_patient_hasOne1.node.y.animVal.value - 2);
var listing_tick_patient_hasOne1 = patient_hasOne1.path(listing_tick_path_patient_hasOne1);
listing_tick_patient_hasOne1.click(listingCheckBoxClick_patient_hasOne1);
listing_tick_patient_hasOne1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var update_tick_path_patient_hasOne1 = "M " + (updateCheckBox_patient_hasOne1.node.x.animVal.value + 1) + " " + (updateCheckBox_patient_hasOne1.node.y.animVal.value + 6) + "L " + (updateCheckBox_patient_hasOne1.node.x.animVal.value + 5) + " " + (updateCheckBox_patient_hasOne1.node.y.animVal.value + 10) + "L " + (updateCheckBox_patient_hasOne1.node.x.animVal.value + updateCheckBox_patient_hasOne1.node.width.animVal.value) + " " + (updateCheckBox_patient_hasOne1.node.y.animVal.value - 2);
var update_tick_patient_hasOne1 = patient_hasOne1.path(update_tick_path_patient_hasOne1);
update_tick_patient_hasOne1.click(listingCheckBoxClick_patient_hasOne1);
update_tick_patient_hasOne1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var deleate_tick_path_patient_hasOne1 = "M " + (deleateCheckBox_patient_hasOne1.node.x.animVal.value + 1) + " " + (deleateCheckBox_patient_hasOne1.node.y.animVal.value + 6) + "L " + (deleateCheckBox_patient_hasOne1.node.x.animVal.value + 5) + " " + (deleateCheckBox_patient_hasOne1.node.y.animVal.value + 10) + "L " + (deleateCheckBox_patient_hasOne1.node.x.animVal.value + deleateCheckBox_patient_hasOne1.node.width.animVal.value) + " " + (deleateCheckBox_patient_hasOne1.node.y.animVal.value - 2);
var deleate_tick_patient_hasOne1 = patient_hasOne1.path(deleate_tick_path_patient_hasOne1);
deleate_tick_patient_hasOne1.click(listingCheckBoxClick_patient_hasOne1);
deleate_tick_patient_hasOne1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

var crud_opt_group_patient_hasOne1 = patient_hasOne1.group(crud_opt_patient_hasOne1, create_patient_hasOne1, listing_patient_hasOne1, update_patient_hasOne1, deleate_patient_hasOne1, createCheckBox_patient_hasOne1, listingCheckBox_patient_hasOne1, updateCheckBox_patient_hasOne1, deleateCheckBox_patient_hasOne1, create_tick_patient_hasOne1, listing_tick_patient_hasOne1, update_tick_patient_hasOne1, deleate_tick_patient_hasOne1);
crud_opt_group_patient_hasOne1.attr({
    'display': 'none'
})

var appiontmentToPatientPath = "M " + (block_appiontment.node.x.animVal.value + block_appiontment.node.width.animVal.value + 100) + " " + (block_doctor_hasOne0.node.y.animVal.value + 50) + "V " +  (block_patient_hasOne1.node.y.animVal.value + 50) + "H " +  (block_patient_hasOne1.node.x.animVal.value); 


var appiontmentToPatient = appiontment.path(appiontmentToPatientPath);
appiontmentToPatient.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1
})

//polygon {Arrow at end of line toward related model}
var appiontmentToPatientArrowPoints = [block_patient_hasOne1.node.x.animVal.value,(block_patient_hasOne1.node.y.animVal.value+50),(block_patient_hasOne1.node.x.animVal.value-10),(block_patient_hasOne1.node.y.animVal.value+50-10),(block_patient_hasOne1.node.x.animVal.value-10),(block_patient_hasOne1.node.y.animVal.value+50+10)];
var appiontmentToPatientArrow = appiontment.polygon(appiontmentToPatientArrowPoints);
appiontmentToPatientArrow.attr({
    fill: "#1f2c39",
    stroke: "#1f2c39",
    strokeWidth: 1,
});


//get access to id
var assembly = Snap("#assembly");

//modal rectangle...
var drag_title_assembly = Snap.parse('<title>Drag and Drop here related model if exist for generate relation inside form</title>');

var block_assembly = assembly.rect(20, 20, 150, 100, 5, 5);
block_assembly.attr({
    fill: "rgb(236, 240, 241)",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray': 5
});
block_assembly.append(drag_title_assembly);

var assembly_rel_path = "M " + (block_assembly.node.x.animVal.value + block_assembly.node.width.animVal.value ) + " " + (block_assembly.node.y.animVal.value + 50) + "H " + (block_assembly.node.x.animVal.value + block_assembly.node.width.animVal.value + 100);
var assembly_rel_path_half = assembly.path(assembly_rel_path);
assembly_rel_path_half.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1
});

    var assembly_rel_path_linkModel = "M " + (block_assembly.node.x.animVal.value + block_assembly.node.width.animVal.value ) + " " + (block_assembly.node.y.animVal.value + 60) + "H " + (block_assembly.node.x.animVal.value + block_assembly.node.width.animVal.value + 450);        
    var assembly_rel_path_half_LinkModel = assembly.path(assembly_rel_path_linkModel);
    assembly_rel_path_half_LinkModel.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray' : 5
});


//modal text populate inside modal rect...
var text_assembly = assembly.text(0, 0, "ASSEMBLY!");
text_assembly.attr({
    x: block_assembly.node.x.animVal.value + 10,
    y: block_assembly.node.y.animVal.value + 20,
    'font-size': 13
});
// line separates modal head and body...
var line_assembly = assembly.line(0, 0, 0, 0);
line_assembly.attr({
    x1: block_assembly.node.x.animVal.value,
    y1: Number(text_assembly.node.attributes.y.nodeValue) + 5,
    x2: block_assembly.node.x.animVal.value + block_assembly.node.width.animVal.value,
    y2: Number(text_assembly.node.attributes.y.nodeValue) + 5,
    stroke: "#1f2c39",
    strokeWidth: 1,
    strokeLinecap: "round"
});

// change coordinates of line and mode1_rect according to text
/*block_assembly.attr({
    width: Number(text_assembly.node.attributes.x.value) + (Number(text_assembly.node.textContent.length) * 10 + 30)
});
line_assembly.attr({
    x2: (block_assembly.node.width.animVal.value + block_assembly.node.x.animVal.value)
})*/

//tooltip on checkbox...
var select_title_assembly = Snap.parse('<title>Click here to select model for CRUD Operations , if unchecked Crud form are not created</title>');

//select box checked when modal form is created
var select_assembly = assembly.rect(0, 0, 15, 15, 2, 2);
select_assembly.attr({
    x: (block_assembly.node.width.animVal.value + block_assembly.node.x.animVal.value - 10),
    y: (block_assembly.node.y.animVal.value - 10),
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 2
});
select_assembly.append(select_title_assembly);

//check symbol inside select box...
var tick_path_assembly = "M " + (select_assembly.node.x.animVal.value + 3) + " " + (select_assembly.node.y.animVal.value + 5) + "L " + (select_assembly.node.x.animVal.value + 7) + " " + (select_assembly.node.y.animVal.value + 10) + "L " + (select_assembly.node.x.animVal.value + select_assembly.node.width.animVal.value) + " " + (select_assembly.node.y.animVal.value - 3);
var tick_assembly = assembly.path(tick_path_assembly)
tick_assembly.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

//check and uncheck function on checkbox...
var checked_assembly = false;
var selectCheckBox_assembly = function () {
    if (!checked_assembly) {
        //  crud_opt_group.removeClass('animated bounceOutUp')
        crud_opt_group_assembly.attr({
            'display': 'block'
        })

        tick_assembly.attr({ display : "block"});
        // crud_opt_group_assembly.addClass('animated bounceInUp');
        checked_assembly = true;
    } else if (checked_assembly) {
        crud_opt_group_assembly.attr({
            'display': 'none'
        })
        tick_assembly.attr({ display : "none"});
        // crud_opt_group.removeClass('animated bounceInUp');
        // crud_opt_group.addClass('animated bounceOutUp')
        checked_assembly = false;
    }
};
select_assembly.click(selectCheckBox_assembly);
tick_assembly.click(selectCheckBox_assembly);

//Crud Rect...
var crud_opt_assembly = assembly.rect(0, 0, 80, 90, 5, 5);
crud_opt_assembly.attr({
    x: (select_assembly.node.x.animVal.value + 15),
    y: (select_assembly.node.y.animVal.value + 20),
    fill: "white",
    stroke: "#1f2c39",
    'stroke-dasharray': 10
})

//Crud options inside Crud_opt rect...
var create_assembly = assembly.text(0, 0, "-   create");
create_assembly.attr({
    x: (crud_opt_assembly.node.x.animVal.value + 5),
    y: (crud_opt_assembly.node.y.animVal.value + 20),
    'font-size': 15
});
var listing_assembly = assembly.text(0, 0, "-   Listing");
listing_assembly.attr({
    x: (crud_opt_assembly.node.x.animVal.value + 5),
    y: (crud_opt_assembly.node.y.animVal.value + 40),
    'font-size': 15
});
var update_assembly = assembly.text(0, 0, "-   update");
update_assembly.attr({
    x: (crud_opt_assembly.node.x.animVal.value + 5),
    y: (crud_opt_assembly.node.y.animVal.value + 60),
    'font-size': 15
});
var deleate_assembly = assembly.text(0, 0, "-   delete");
deleate_assembly.attr({
    x: (crud_opt_assembly.node.x.animVal.value + 5),
    y: (crud_opt_assembly.node.y.animVal.value + 80),
    'font-size': 15
});

//check and uncheck Crud options functions...
var createCheckBoxClicked_assembly = false;
var createCheckBoxClick_assembly = function () {
    if (!createCheckBoxClicked_assembly) {
        create_tick_assembly.attr({
            display: "block"
        });
        createCheckBoxClicked_assembly = true;
    } else if (createCheckBoxClicked_assembly) {
        create_tick_assembly.attr({
            display: "none"
        });
        createCheckBoxClicked_assembly = false;
    }
}

//listing check all three remaining options include listing , delete , edit
var listingCheckBoxClicked_assembly = false;
var listingCheckBoxClick_assembly = function () {
    if (!listingCheckBoxClicked_assembly) {
        listing_tick_assembly.attr({
            display: "block"
        });
        update_tick_assembly.attr({
            display: "block"
        });
        deleate_tick_assembly.attr({
            display: "block"
        });
        listingCheckBoxClicked_assembly = true;
    } else if (listingCheckBoxClicked_assembly) {
        listing_tick_assembly.attr({
            display: "none"
        });
        update_tick_assembly.attr({
            display: "none"
        });
        deleate_tick_assembly.attr({
            display: "none"
        });
        listingCheckBoxClicked_assembly = false;
    }
}

//now set checkboxes on front of Crud operations...
var createCheckBox_assembly = assembly.rect(0, 0, 12, 12, 1, 1);
createCheckBox_assembly.attr({
    x: (Number(create_assembly.node.attributes.x.nodeValue) + 60),
    y: (create_assembly.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
createCheckBox_assembly.click(createCheckBoxClick_assembly);
var listingCheckBox_assembly = assembly.rect(0, 0, 12, 12, 1, 1);
listingCheckBox_assembly.attr({
    x: (Number(listing_assembly.node.attributes.x.nodeValue) + 60),
    y: (listing_assembly.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
listingCheckBox_assembly.click(listingCheckBoxClick_assembly);
var updateCheckBox_assembly = assembly.rect(0, 0, 12, 12, 1, 1);
updateCheckBox_assembly.attr({
    x: (Number(update_assembly.node.attributes.x.nodeValue) + 60),
    y: (update_assembly.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
updateCheckBox_assembly.click(listingCheckBoxClick_assembly);
var deleateCheckBox_assembly = assembly.rect(0, 0, 12, 12, 1, 1);
deleateCheckBox_assembly.attr({
    x: (Number(deleate_assembly.node.attributes.x.nodeValue) + 60),
    y: (deleate_assembly.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
deleateCheckBox_assembly.click(listingCheckBoxClick_assembly);

//tick inside create check_box...
var create_tick_path_assembly = "M " + (createCheckBox_assembly.node.x.animVal.value + 1) + " " + (createCheckBox_assembly.node.y.animVal.value + 6) + "L " + (createCheckBox_assembly.node.x.animVal.value + 5) + " " + (createCheckBox_assembly.node.y.animVal.value + 10) + "L " + (createCheckBox_assembly.node.x.animVal.value + createCheckBox_assembly.node.width.animVal.value) + " " + (createCheckBox_assembly.node.y.animVal.value - 2);
var create_tick_assembly = assembly.path(create_tick_path_assembly);
create_tick_assembly.click(createCheckBoxClick_assembly);
create_tick_assembly.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside listing check_box...
var listing_tick_path_assembly = "M " + (listingCheckBox_assembly.node.x.animVal.value + 1) + " " + (listingCheckBox_assembly.node.y.animVal.value + 6) + "L " + (listingCheckBox_assembly.node.x.animVal.value + 5) + " " + (listingCheckBox_assembly.node.y.animVal.value + 10) + "L " + (listingCheckBox_assembly.node.x.animVal.value + listingCheckBox_assembly.node.width.animVal.value) + " " + (listingCheckBox_assembly.node.y.animVal.value - 2);
var listing_tick_assembly = assembly.path(listing_tick_path_assembly);
listing_tick_assembly.click(listingCheckBoxClick_assembly);
listing_tick_assembly.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var update_tick_path_assembly = "M " + (updateCheckBox_assembly.node.x.animVal.value + 1) + " " + (updateCheckBox_assembly.node.y.animVal.value + 6) + "L " + (updateCheckBox_assembly.node.x.animVal.value + 5) + " " + (updateCheckBox_assembly.node.y.animVal.value + 10) + "L " + (updateCheckBox_assembly.node.x.animVal.value + updateCheckBox_assembly.node.width.animVal.value) + " " + (updateCheckBox_assembly.node.y.animVal.value - 2);
var update_tick_assembly = assembly.path(update_tick_path_assembly);
update_tick_assembly.click(listingCheckBoxClick_assembly);
update_tick_assembly.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var deleate_tick_path_assembly = "M " + (deleateCheckBox_assembly.node.x.animVal.value + 1) + " " + (deleateCheckBox_assembly.node.y.animVal.value + 6) + "L " + (deleateCheckBox_assembly.node.x.animVal.value + 5) + " " + (deleateCheckBox_assembly.node.y.animVal.value + 10) + "L " + (deleateCheckBox_assembly.node.x.animVal.value + deleateCheckBox_assembly.node.width.animVal.value) + " " + (deleateCheckBox_assembly.node.y.animVal.value - 2);
var deleate_tick_assembly = assembly.path(deleate_tick_path_assembly);
deleate_tick_assembly.click(listingCheckBoxClick_assembly);
deleate_tick_assembly.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

var crud_opt_group_assembly = assembly.group(crud_opt_assembly, create_assembly, listing_assembly, update_assembly, deleate_assembly, createCheckBox_assembly, listingCheckBox_assembly, updateCheckBox_assembly, deleateCheckBox_assembly, create_tick_assembly, listing_tick_assembly, update_tick_assembly, deleate_tick_assembly);
crud_opt_group_assembly.attr({
    'display': 'none'
})
//relative modals svg...



var model1_hasAndBelongsToMany0 = Snap("#assembly");

//modal rectangle...
var drag_title_model1_hasAndBelongsToMany0 = Snap.parse('<title>Drag and Drop here related model if exist for generate relation inside form</title>');

var block_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.rect(20, 20, 150, 100, 5, 5);
block_model1_hasAndBelongsToMany0.attr({
    x: (block_assembly.node.x.animVal.value + block_assembly.node.width.animVal.value + 570),
    width : (block_assembly.node.width.animVal.value),
    fill: "rgb(236, 240, 241)",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray': 5 
});


block_model1_hasAndBelongsToMany0.append(drag_title_model1_hasAndBelongsToMany0);


//modal text populate inside modal rect...
var text_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.text(0, 0, "MODEL1!");
text_model1_hasAndBelongsToMany0.attr({
    x: block_model1_hasAndBelongsToMany0.node.x.animVal.value + 10,
    y: block_model1_hasAndBelongsToMany0.node.y.animVal.value + 20,
    'font-size': 13
});


// line separates modal head and body...
var line_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.line(0, 0, 0, 0);
line_model1_hasAndBelongsToMany0.attr({
    x1: block_model1_hasAndBelongsToMany0.node.x.animVal.value,
    y1: Number(text_model1_hasAndBelongsToMany0.node.attributes.y.nodeValue) + 5,
    x2: block_model1_hasAndBelongsToMany0.node.x.animVal.value + block_model1_hasAndBelongsToMany0.node.width.animVal.value,
    y2: Number(text_model1_hasAndBelongsToMany0.node.attributes.y.nodeValue) + 5,
    stroke: "#1f2c39",
    strokeWidth: 1,
    strokeLinecap: "round"
});

// change coordinates of line and mode1_rect according to text
/*<!--block_model1_hasAndBelongsToMany0.attr({
    width: Number(text_model1_hasAndBelongsToMany0.node.attributes.x.value) + (Number(text_model1_hasAndBelongsToMany0.node.textContent.length) * 10 + 30)
});
line_model1_hasAndBelongsToMany0.attr({
    x2: (block_model1_hasAndBelongsToMany0.node.width.animVal.value + block_model1_hasAndBelongsToMany0.node.x.animVal.value)
})-->*/

//tooltip on checkbox...
var select_title_model1_hasAndBelongsToMany0 = Snap.parse('<title>Click here to select model for CRUD Operations , if unchecked Crud form are not created</title>');

//select box checked when modal form is created
var select_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.rect(0, 0, 15, 15, 2, 2);
select_model1_hasAndBelongsToMany0.attr({
    x: (block_model1_hasAndBelongsToMany0.node.width.animVal.value + block_model1_hasAndBelongsToMany0.node.x.animVal.value - 10),
    y: (block_model1_hasAndBelongsToMany0.node.y.animVal.value - 10),
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 2
});
select_model1_hasAndBelongsToMany0.append(select_title_model1_hasAndBelongsToMany0);

//check symbol inside select box...
var tick_path_model1_hasAndBelongsToMany0 = "M " + (select_model1_hasAndBelongsToMany0.node.x.animVal.value + 3) + " " + (select_model1_hasAndBelongsToMany0.node.y.animVal.value + 5) + "L " + (select_model1_hasAndBelongsToMany0.node.x.animVal.value + 7) + " " + (select_model1_hasAndBelongsToMany0.node.y.animVal.value + 10) + "L " + (select_model1_hasAndBelongsToMany0.node.x.animVal.value + select_model1_hasAndBelongsToMany0.node.width.animVal.value) + " " + (select_model1_hasAndBelongsToMany0.node.y.animVal.value - 3);
var tick_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.path(tick_path_model1_hasAndBelongsToMany0)
tick_model1_hasAndBelongsToMany0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

//check and uncheck function on checkbox...
var checked_model1_hasAndBelongsToMany0 = false;
var selectCheckBox_model1_hasAndBelongsToMany0 = function () {
    if (!checked_model1_hasAndBelongsToMany0) {
        crud_opt_group_model1_hasAndBelongsToMany0.attr({
            'display': 'block'
        })
        tick_model1_hasAndBelongsToMany0.attr({ display : "block"});
        block_model1_hasAndBelongsToMany0.attr({ x : (block_assembly.node.x.animVal.value + block_assembly.node.width.animVal.value + 570)});
        checked_model1_hasAndBelongsToMany0 = true;
    } else if (checked_model1_hasAndBelongsToMany0) {
        crud_opt_group_model1_hasAndBelongsToMany0.attr({
            'display': 'none'
        })
        tick_model1_hasAndBelongsToMany0.attr({ display : "none"});
        checked_model1_hasAndBelongsToMany0 = false;
    }
};
select_model1_hasAndBelongsToMany0.click(selectCheckBox_model1_hasAndBelongsToMany0);
tick_model1_hasAndBelongsToMany0.click(selectCheckBox_model1_hasAndBelongsToMany0);

//Crud Rect...
var crud_opt_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.rect(0, 0, 80, 90, 5, 5);
crud_opt_model1_hasAndBelongsToMany0.attr({
    x: (select_model1_hasAndBelongsToMany0.node.x.animVal.value + 15),
    y: (select_model1_hasAndBelongsToMany0.node.y.animVal.value + 20),
    fill: "white",
    stroke: "#1f2c39",
    'stroke-dasharray': 10
})

//Crud options inside Crud_opt rect...
var create_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.text(0, 0, "-   create");
create_model1_hasAndBelongsToMany0.attr({
    x: (crud_opt_model1_hasAndBelongsToMany0.node.x.animVal.value + 5),
    y: (crud_opt_model1_hasAndBelongsToMany0.node.y.animVal.value + 20),
    'font-size': 15
});
var listing_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.text(0, 0, "-   Listing");
listing_model1_hasAndBelongsToMany0.attr({
    x: (crud_opt_model1_hasAndBelongsToMany0.node.x.animVal.value + 5),
    y: (crud_opt_model1_hasAndBelongsToMany0.node.y.animVal.value + 40),
    'font-size': 15
});
var update_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.text(0, 0, "-   update");
update_model1_hasAndBelongsToMany0.attr({
    x: (crud_opt_model1_hasAndBelongsToMany0.node.x.animVal.value + 5),
    y: (crud_opt_model1_hasAndBelongsToMany0.node.y.animVal.value + 60),
    'font-size': 15
});
var deleate_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.text(0, 0, "-   delete");
deleate_model1_hasAndBelongsToMany0.attr({
    x: (crud_opt_model1_hasAndBelongsToMany0.node.x.animVal.value + 5),
    y: (crud_opt_model1_hasAndBelongsToMany0.node.y.animVal.value + 80),
    'font-size': 15
});

//check and uncheck Crud options functions...
var createCheckBoxClicked_model1_hasAndBelongsToMany0 = false;
var createCheckBoxClick_model1_hasAndBelongsToMany0 = function () {
    if (!createCheckBoxClicked_model1_hasAndBelongsToMany0) {
        create_tick_model1_hasAndBelongsToMany0.attr({
            display: "block"
        });
        createCheckBoxClicked_model1_hasAndBelongsToMany0 = true;
    } else if (createCheckBoxClicked_model1_hasAndBelongsToMany0) {
        create_tick_model1_hasAndBelongsToMany0.attr({
            display: "none"
        });
        createCheckBoxClicked_model1_hasAndBelongsToMany0 = false;
    }
}

//listing check all three remaining options include listing , delete , edit
var listingCheckBoxClicked_model1_hasAndBelongsToMany0 = false;
var listingCheckBoxClick_model1_hasAndBelongsToMany0 = function () {
    if (!listingCheckBoxClicked_model1_hasAndBelongsToMany0) {
        listing_tick_model1_hasAndBelongsToMany0.attr({
            display: "block"
        });
        update_tick_model1_hasAndBelongsToMany0.attr({
            display: "block"
        });
        deleate_tick_model1_hasAndBelongsToMany0.attr({
            display: "block"
        });
        listingCheckBoxClicked_model1_hasAndBelongsToMany0 = true;
    } else if (listingCheckBoxClicked_model1_hasAndBelongsToMany0) {
        listing_tick_model1_hasAndBelongsToMany0.attr({
            display: "none"
        });
        update_tick_model1_hasAndBelongsToMany0.attr({
            display: "none"
        });
        deleate_tick_model1_hasAndBelongsToMany0.attr({
            display: "none"
        });
        listingCheckBoxClicked_model1_hasAndBelongsToMany0 = false;
    }
}

//now set checkboxes on front of Crud operations...
var createCheckBox_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.rect(0, 0, 12, 12, 1, 1);
createCheckBox_model1_hasAndBelongsToMany0.attr({
    x: (Number(create_model1_hasAndBelongsToMany0.node.attributes.x.nodeValue) + 60),
    y: (create_model1_hasAndBelongsToMany0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
createCheckBox_model1_hasAndBelongsToMany0.click(createCheckBoxClick_model1_hasAndBelongsToMany0);
var listingCheckBox_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.rect(0, 0, 12, 12, 1, 1);
listingCheckBox_model1_hasAndBelongsToMany0.attr({
    x: (Number(listing_model1_hasAndBelongsToMany0.node.attributes.x.nodeValue) + 60),
    y: (listing_model1_hasAndBelongsToMany0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
listingCheckBox_model1_hasAndBelongsToMany0.click(listingCheckBoxClick_model1_hasAndBelongsToMany0);
var updateCheckBox_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.rect(0, 0, 12, 12, 1, 1);
updateCheckBox_model1_hasAndBelongsToMany0.attr({
    x: (Number(update_model1_hasAndBelongsToMany0.node.attributes.x.nodeValue) + 60),
    y: (update_model1_hasAndBelongsToMany0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
updateCheckBox_model1_hasAndBelongsToMany0.click(listingCheckBoxClick_model1_hasAndBelongsToMany0);
var deleateCheckBox_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.rect(0, 0, 12, 12, 1, 1);
deleateCheckBox_model1_hasAndBelongsToMany0.attr({
    x: (Number(deleate_model1_hasAndBelongsToMany0.node.attributes.x.nodeValue) + 60),
    y: (deleate_model1_hasAndBelongsToMany0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
deleateCheckBox_model1_hasAndBelongsToMany0.click(listingCheckBoxClick_model1_hasAndBelongsToMany0);

//tick inside create check_box...
var create_tick_path_model1_hasAndBelongsToMany0 = "M " + (createCheckBox_model1_hasAndBelongsToMany0.node.x.animVal.value + 1) + " " + (createCheckBox_model1_hasAndBelongsToMany0.node.y.animVal.value + 6) + "L " + (createCheckBox_model1_hasAndBelongsToMany0.node.x.animVal.value + 5) + " " + (createCheckBox_model1_hasAndBelongsToMany0.node.y.animVal.value + 10) + "L " + (createCheckBox_model1_hasAndBelongsToMany0.node.x.animVal.value + createCheckBox_model1_hasAndBelongsToMany0.node.width.animVal.value) + " " + (createCheckBox_model1_hasAndBelongsToMany0.node.y.animVal.value - 2);
var create_tick_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.path(create_tick_path_model1_hasAndBelongsToMany0);
create_tick_model1_hasAndBelongsToMany0.click(createCheckBoxClick_model1_hasAndBelongsToMany0);
create_tick_model1_hasAndBelongsToMany0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside listing check_box...
var listing_tick_path_model1_hasAndBelongsToMany0 = "M " + (listingCheckBox_model1_hasAndBelongsToMany0.node.x.animVal.value + 1) + " " + (listingCheckBox_model1_hasAndBelongsToMany0.node.y.animVal.value + 6) + "L " + (listingCheckBox_model1_hasAndBelongsToMany0.node.x.animVal.value + 5) + " " + (listingCheckBox_model1_hasAndBelongsToMany0.node.y.animVal.value + 10) + "L " + (listingCheckBox_model1_hasAndBelongsToMany0.node.x.animVal.value + listingCheckBox_model1_hasAndBelongsToMany0.node.width.animVal.value) + " " + (listingCheckBox_model1_hasAndBelongsToMany0.node.y.animVal.value - 2);
var listing_tick_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.path(listing_tick_path_model1_hasAndBelongsToMany0);
listing_tick_model1_hasAndBelongsToMany0.click(listingCheckBoxClick_model1_hasAndBelongsToMany0);
listing_tick_model1_hasAndBelongsToMany0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var update_tick_path_model1_hasAndBelongsToMany0 = "M " + (updateCheckBox_model1_hasAndBelongsToMany0.node.x.animVal.value + 1) + " " + (updateCheckBox_model1_hasAndBelongsToMany0.node.y.animVal.value + 6) + "L " + (updateCheckBox_model1_hasAndBelongsToMany0.node.x.animVal.value + 5) + " " + (updateCheckBox_model1_hasAndBelongsToMany0.node.y.animVal.value + 10) + "L " + (updateCheckBox_model1_hasAndBelongsToMany0.node.x.animVal.value + updateCheckBox_model1_hasAndBelongsToMany0.node.width.animVal.value) + " " + (updateCheckBox_model1_hasAndBelongsToMany0.node.y.animVal.value - 2);
var update_tick_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.path(update_tick_path_model1_hasAndBelongsToMany0);
update_tick_model1_hasAndBelongsToMany0.click(listingCheckBoxClick_model1_hasAndBelongsToMany0);
update_tick_model1_hasAndBelongsToMany0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var deleate_tick_path_model1_hasAndBelongsToMany0 = "M " + (deleateCheckBox_model1_hasAndBelongsToMany0.node.x.animVal.value + 1) + " " + (deleateCheckBox_model1_hasAndBelongsToMany0.node.y.animVal.value + 6) + "L " + (deleateCheckBox_model1_hasAndBelongsToMany0.node.x.animVal.value + 5) + " " + (deleateCheckBox_model1_hasAndBelongsToMany0.node.y.animVal.value + 10) + "L " + (deleateCheckBox_model1_hasAndBelongsToMany0.node.x.animVal.value + deleateCheckBox_model1_hasAndBelongsToMany0.node.width.animVal.value) + " " + (deleateCheckBox_model1_hasAndBelongsToMany0.node.y.animVal.value - 2);
var deleate_tick_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.path(deleate_tick_path_model1_hasAndBelongsToMany0);
deleate_tick_model1_hasAndBelongsToMany0.click(listingCheckBoxClick_model1_hasAndBelongsToMany0);
deleate_tick_model1_hasAndBelongsToMany0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

var crud_opt_group_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.group(crud_opt_model1_hasAndBelongsToMany0, create_model1_hasAndBelongsToMany0, listing_model1_hasAndBelongsToMany0, update_model1_hasAndBelongsToMany0, deleate_model1_hasAndBelongsToMany0, createCheckBox_model1_hasAndBelongsToMany0, listingCheckBox_model1_hasAndBelongsToMany0, updateCheckBox_model1_hasAndBelongsToMany0, deleateCheckBox_model1_hasAndBelongsToMany0, create_tick_model1_hasAndBelongsToMany0, listing_tick_model1_hasAndBelongsToMany0, update_tick_model1_hasAndBelongsToMany0, deleate_tick_model1_hasAndBelongsToMany0);
crud_opt_group_model1_hasAndBelongsToMany0.attr({
    'display': 'none'
})


var assemblymodel1 = Snap("#assembly");

//modal rectangle...
var drag_title_assemblymodel1 = Snap.parse('<title>Drag and Drop here related model if exist for generate relation inside form</title>');

var block_assemblymodel1 = assemblymodel1.rect(20, 20, 150, 100, 5, 5);
block_assemblymodel1.attr({
    x: (block_assembly.node.x.animVal.value + block_assembly.node.width.animVal.value + 200),
    width : (block_assembly.node.width.animVal.value),
    fill: "rgb(217, 202, 238)",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray': 5 
});


block_assemblymodel1.append(drag_title_assemblymodel1);

//modal text populate inside modal rect...
var text_assemblymodel1 = assemblymodel1.text(0, 0, "assemblyMODEL1!");
text_assemblymodel1.attr({
    x: block_assemblymodel1.node.x.animVal.value + 10,
    y: block_assemblymodel1.node.y.animVal.value + 20,
    'font-size': 13
});


// line separates modal head and body...
var line_assemblymodel1 = assemblymodel1.line(0, 0, 0, 0);
line_assemblymodel1.attr({
    x1: block_assemblymodel1.node.x.animVal.value,
    y1: Number(text_assemblymodel1.node.attributes.y.nodeValue) + 5,
    x2: block_assemblymodel1.node.x.animVal.value + block_assemblymodel1.node.width.animVal.value,
    y2: Number(text_assemblymodel1.node.attributes.y.nodeValue) + 5,
    stroke: "#1f2c39",
    strokeWidth: 1,
    strokeLinecap: "round"
});

//line extend line from current model and attach to related model in hasAndBelongsToMany relation...
var assemblyToModel1Path = "M " + (block_assemblymodel1.node.x.animVal.value + block_assemblymodel1.node.width.animVal.value + 100)  + " "  + (block_assembly.node.y.animVal.value + 60)+ "V " + (block_model1_hasAndBelongsToMany0.node.y.animVal.value + 60) + "H " + (block_model1_hasAndBelongsToMany0.node.x.animVal.value);
var assemblyToModel1 = assembly.path(assemblyToModel1Path);
assemblyToModel1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray' : 5
})

//line and arrows from current model toward linked model of hasAndBelongsToMany relation

var assemblyToassemblyModel1Path = "M " + (block_assembly.node.x.animVal.value + block_assembly.node.width.animVal.value + 100) + " " + (block_assembly.node.y.animVal.value + 50) + "V " +  (block_assemblymodel1.node.y.animVal.value + 50) + "H " +  (block_assemblymodel1.node.x.animVal.value); 


var assemblyToassemblyModel1 = assembly.path(assemblyToassemblyModel1Path);
assemblyToassemblyModel1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1
})
//polygon {Arrow at end of line toward related model}
var assemblyToassemblyModel1ArrowPoints = [block_assemblymodel1.node.x.animVal.value,(block_assemblymodel1.node.y.animVal.value+50),(block_assemblymodel1.node.x.animVal.value-10),(block_assemblymodel1.node.y.animVal.value+50-10),(block_assemblymodel1.node.x.animVal.value-10),(block_assemblymodel1.node.y.animVal.value+50+10)];
var assemblyToassemblyModel1Arrow = assembly.polygon(assemblyToassemblyModel1ArrowPoints);
assemblyToassemblyModel1Arrow.attr({
    fill: "#1f2c39",
    stroke: "#1f2c39",
    strokeWidth: 1,
});

//line and arrows from 2nd model toward linked model of hasAndBelongsToMany relation
var Model1ToassemblyModel1Path = "M " + (block_model1_hasAndBelongsToMany0.node.x.animVal.value) + " " + (block_model1_hasAndBelongsToMany0.node.y.animVal.value + 50) + "H " + (block_assemblymodel1.node.x.animVal.value + block_assemblymodel1.node.width.animVal.value);

var Model1ToassemblyModel1 = assembly.path(Model1ToassemblyModel1Path);
Model1ToassemblyModel1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1
})
//polygon {Arrow at end of line toward related model}
var Model1ToassemblyModel1ArrowPoints = [(block_assemblymodel1.node.x.animVal.value + block_assemblymodel1.node.width.animVal.value) , (block_assemblymodel1.node.y.animVal.value + 50) , (block_assemblymodel1.node.x.animVal.value + block_assemblymodel1.node.width.animVal.value + 10) , (block_assemblymodel1.node.y.animVal.value + 50 +10) , (block_assemblymodel1.node.x.animVal.value + block_assemblymodel1.node.width.animVal.value + 10) , (block_assemblymodel1.node.y.animVal.value + 50 - 10)];
var Model1ToassemblyModel1Arrow = assembly.polygon(Model1ToassemblyModel1ArrowPoints);
Model1ToassemblyModel1Arrow.attr({
    fill: "#1f2c39",
    stroke: "#1f2c39",
    strokeWidth: 1,
});

//get access to id
var customer1 = Snap("#customer1");

//modal rectangle...
var drag_title_customer1 = Snap.parse('<title>Drag and Drop here related model if exist for generate relation inside form</title>');

var block_customer1 = customer1.rect(20, 20, 150, 100, 5, 5);
block_customer1.attr({
    fill: "rgb(236, 240, 241)",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray': 5
});
block_customer1.append(drag_title_customer1);

var customer1_rel_path = "M " + (block_customer1.node.x.animVal.value + block_customer1.node.width.animVal.value ) + " " + (block_customer1.node.y.animVal.value + 50) + "H " + (block_customer1.node.x.animVal.value + block_customer1.node.width.animVal.value + 100);
var customer1_rel_path_half = customer1.path(customer1_rel_path);
customer1_rel_path_half.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1
});


//modal text populate inside modal rect...
var text_customer1 = customer1.text(0, 0, "CUSTOMER1!");
text_customer1.attr({
    x: block_customer1.node.x.animVal.value + 10,
    y: block_customer1.node.y.animVal.value + 20,
    'font-size': 13
});
// line separates modal head and body...
var line_customer1 = customer1.line(0, 0, 0, 0);
line_customer1.attr({
    x1: block_customer1.node.x.animVal.value,
    y1: Number(text_customer1.node.attributes.y.nodeValue) + 5,
    x2: block_customer1.node.x.animVal.value + block_customer1.node.width.animVal.value,
    y2: Number(text_customer1.node.attributes.y.nodeValue) + 5,
    stroke: "#1f2c39",
    strokeWidth: 1,
    strokeLinecap: "round"
});

// change coordinates of line and mode1_rect according to text
/*block_customer1.attr({
    width: Number(text_customer1.node.attributes.x.value) + (Number(text_customer1.node.textContent.length) * 10 + 30)
});
line_customer1.attr({
    x2: (block_customer1.node.width.animVal.value + block_customer1.node.x.animVal.value)
})*/

//tooltip on checkbox...
var select_title_customer1 = Snap.parse('<title>Click here to select model for CRUD Operations , if unchecked Crud form are not created</title>');

//select box checked when modal form is created
var select_customer1 = customer1.rect(0, 0, 15, 15, 2, 2);
select_customer1.attr({
    x: (block_customer1.node.width.animVal.value + block_customer1.node.x.animVal.value - 10),
    y: (block_customer1.node.y.animVal.value - 10),
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 2
});
select_customer1.append(select_title_customer1);

//check symbol inside select box...
var tick_path_customer1 = "M " + (select_customer1.node.x.animVal.value + 3) + " " + (select_customer1.node.y.animVal.value + 5) + "L " + (select_customer1.node.x.animVal.value + 7) + " " + (select_customer1.node.y.animVal.value + 10) + "L " + (select_customer1.node.x.animVal.value + select_customer1.node.width.animVal.value) + " " + (select_customer1.node.y.animVal.value - 3);
var tick_customer1 = customer1.path(tick_path_customer1)
tick_customer1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

//check and uncheck function on checkbox...
var checked_customer1 = false;
var selectCheckBox_customer1 = function () {
    if (!checked_customer1) {
        //  crud_opt_group.removeClass('animated bounceOutUp')
        crud_opt_group_customer1.attr({
            'display': 'block'
        })

        tick_customer1.attr({ display : "block"});
        // crud_opt_group_customer1.addClass('animated bounceInUp');
        checked_customer1 = true;
    } else if (checked_customer1) {
        crud_opt_group_customer1.attr({
            'display': 'none'
        })
        tick_customer1.attr({ display : "none"});
        // crud_opt_group.removeClass('animated bounceInUp');
        // crud_opt_group.addClass('animated bounceOutUp')
        checked_customer1 = false;
    }
};
select_customer1.click(selectCheckBox_customer1);
tick_customer1.click(selectCheckBox_customer1);

//Crud Rect...
var crud_opt_customer1 = customer1.rect(0, 0, 80, 90, 5, 5);
crud_opt_customer1.attr({
    x: (select_customer1.node.x.animVal.value + 15),
    y: (select_customer1.node.y.animVal.value + 20),
    fill: "white",
    stroke: "#1f2c39",
    'stroke-dasharray': 10
})

//Crud options inside Crud_opt rect...
var create_customer1 = customer1.text(0, 0, "-   create");
create_customer1.attr({
    x: (crud_opt_customer1.node.x.animVal.value + 5),
    y: (crud_opt_customer1.node.y.animVal.value + 20),
    'font-size': 15
});
var listing_customer1 = customer1.text(0, 0, "-   Listing");
listing_customer1.attr({
    x: (crud_opt_customer1.node.x.animVal.value + 5),
    y: (crud_opt_customer1.node.y.animVal.value + 40),
    'font-size': 15
});
var update_customer1 = customer1.text(0, 0, "-   update");
update_customer1.attr({
    x: (crud_opt_customer1.node.x.animVal.value + 5),
    y: (crud_opt_customer1.node.y.animVal.value + 60),
    'font-size': 15
});
var deleate_customer1 = customer1.text(0, 0, "-   delete");
deleate_customer1.attr({
    x: (crud_opt_customer1.node.x.animVal.value + 5),
    y: (crud_opt_customer1.node.y.animVal.value + 80),
    'font-size': 15
});

//check and uncheck Crud options functions...
var createCheckBoxClicked_customer1 = false;
var createCheckBoxClick_customer1 = function () {
    if (!createCheckBoxClicked_customer1) {
        create_tick_customer1.attr({
            display: "block"
        });
        createCheckBoxClicked_customer1 = true;
    } else if (createCheckBoxClicked_customer1) {
        create_tick_customer1.attr({
            display: "none"
        });
        createCheckBoxClicked_customer1 = false;
    }
}

//listing check all three remaining options include listing , delete , edit
var listingCheckBoxClicked_customer1 = false;
var listingCheckBoxClick_customer1 = function () {
    if (!listingCheckBoxClicked_customer1) {
        listing_tick_customer1.attr({
            display: "block"
        });
        update_tick_customer1.attr({
            display: "block"
        });
        deleate_tick_customer1.attr({
            display: "block"
        });
        listingCheckBoxClicked_customer1 = true;
    } else if (listingCheckBoxClicked_customer1) {
        listing_tick_customer1.attr({
            display: "none"
        });
        update_tick_customer1.attr({
            display: "none"
        });
        deleate_tick_customer1.attr({
            display: "none"
        });
        listingCheckBoxClicked_customer1 = false;
    }
}

//now set checkboxes on front of Crud operations...
var createCheckBox_customer1 = customer1.rect(0, 0, 12, 12, 1, 1);
createCheckBox_customer1.attr({
    x: (Number(create_customer1.node.attributes.x.nodeValue) + 60),
    y: (create_customer1.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
createCheckBox_customer1.click(createCheckBoxClick_customer1);
var listingCheckBox_customer1 = customer1.rect(0, 0, 12, 12, 1, 1);
listingCheckBox_customer1.attr({
    x: (Number(listing_customer1.node.attributes.x.nodeValue) + 60),
    y: (listing_customer1.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
listingCheckBox_customer1.click(listingCheckBoxClick_customer1);
var updateCheckBox_customer1 = customer1.rect(0, 0, 12, 12, 1, 1);
updateCheckBox_customer1.attr({
    x: (Number(update_customer1.node.attributes.x.nodeValue) + 60),
    y: (update_customer1.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
updateCheckBox_customer1.click(listingCheckBoxClick_customer1);
var deleateCheckBox_customer1 = customer1.rect(0, 0, 12, 12, 1, 1);
deleateCheckBox_customer1.attr({
    x: (Number(deleate_customer1.node.attributes.x.nodeValue) + 60),
    y: (deleate_customer1.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
deleateCheckBox_customer1.click(listingCheckBoxClick_customer1);

//tick inside create check_box...
var create_tick_path_customer1 = "M " + (createCheckBox_customer1.node.x.animVal.value + 1) + " " + (createCheckBox_customer1.node.y.animVal.value + 6) + "L " + (createCheckBox_customer1.node.x.animVal.value + 5) + " " + (createCheckBox_customer1.node.y.animVal.value + 10) + "L " + (createCheckBox_customer1.node.x.animVal.value + createCheckBox_customer1.node.width.animVal.value) + " " + (createCheckBox_customer1.node.y.animVal.value - 2);
var create_tick_customer1 = customer1.path(create_tick_path_customer1);
create_tick_customer1.click(createCheckBoxClick_customer1);
create_tick_customer1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside listing check_box...
var listing_tick_path_customer1 = "M " + (listingCheckBox_customer1.node.x.animVal.value + 1) + " " + (listingCheckBox_customer1.node.y.animVal.value + 6) + "L " + (listingCheckBox_customer1.node.x.animVal.value + 5) + " " + (listingCheckBox_customer1.node.y.animVal.value + 10) + "L " + (listingCheckBox_customer1.node.x.animVal.value + listingCheckBox_customer1.node.width.animVal.value) + " " + (listingCheckBox_customer1.node.y.animVal.value - 2);
var listing_tick_customer1 = customer1.path(listing_tick_path_customer1);
listing_tick_customer1.click(listingCheckBoxClick_customer1);
listing_tick_customer1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var update_tick_path_customer1 = "M " + (updateCheckBox_customer1.node.x.animVal.value + 1) + " " + (updateCheckBox_customer1.node.y.animVal.value + 6) + "L " + (updateCheckBox_customer1.node.x.animVal.value + 5) + " " + (updateCheckBox_customer1.node.y.animVal.value + 10) + "L " + (updateCheckBox_customer1.node.x.animVal.value + updateCheckBox_customer1.node.width.animVal.value) + " " + (updateCheckBox_customer1.node.y.animVal.value - 2);
var update_tick_customer1 = customer1.path(update_tick_path_customer1);
update_tick_customer1.click(listingCheckBoxClick_customer1);
update_tick_customer1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var deleate_tick_path_customer1 = "M " + (deleateCheckBox_customer1.node.x.animVal.value + 1) + " " + (deleateCheckBox_customer1.node.y.animVal.value + 6) + "L " + (deleateCheckBox_customer1.node.x.animVal.value + 5) + " " + (deleateCheckBox_customer1.node.y.animVal.value + 10) + "L " + (deleateCheckBox_customer1.node.x.animVal.value + deleateCheckBox_customer1.node.width.animVal.value) + " " + (deleateCheckBox_customer1.node.y.animVal.value - 2);
var deleate_tick_customer1 = customer1.path(deleate_tick_path_customer1);
deleate_tick_customer1.click(listingCheckBoxClick_customer1);
deleate_tick_customer1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

var crud_opt_group_customer1 = customer1.group(crud_opt_customer1, create_customer1, listing_customer1, update_customer1, deleate_customer1, createCheckBox_customer1, listingCheckBox_customer1, updateCheckBox_customer1, deleateCheckBox_customer1, create_tick_customer1, listing_tick_customer1, update_tick_customer1, deleate_tick_customer1);
crud_opt_group_customer1.attr({
    'display': 'none'
})
//relative modals svg...

var email_hasMany0 = Snap("#customer1");

//modal rectangle...
var drag_title_email_hasMany0 = Snap.parse('<title>Drag and Drop here related model if exist for generate relation inside form</title>');

var block_email_hasMany0 = email_hasMany0.rect(20, 20, 150, 100, 5, 5);
block_email_hasMany0.attr({
    x: (block_customer1.node.x.animVal.value + block_customer1.node.width.animVal.value + 200),
    width : (block_customer1.node.width.animVal.value),
    fill: "rgb(236, 240, 241)",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray': 5 
});


block_email_hasMany0.append(drag_title_email_hasMany0);


//modal text populate inside modal rect...
var text_email_hasMany0 = email_hasMany0.text(0, 0, "EMAIL!");
text_email_hasMany0.attr({
    x: block_email_hasMany0.node.x.animVal.value + 10,
    y: block_email_hasMany0.node.y.animVal.value + 20,
    'font-size': 13
});
// line separates modal head and body...
var line_email_hasMany0 = email_hasMany0.line(0, 0, 0, 0);
line_email_hasMany0.attr({
    x1: block_email_hasMany0.node.x.animVal.value,
    y1: Number(text_email_hasMany0.node.attributes.y.nodeValue) + 5,
    x2: block_email_hasMany0.node.x.animVal.value + block_email_hasMany0.node.width.animVal.value,
    y2: Number(text_email_hasMany0.node.attributes.y.nodeValue) + 5,
    stroke: "#1f2c39",
    strokeWidth: 1,
    strokeLinecap: "round"
});

// change coordinates of line and mode1_rect according to text
/*<!--block_email_hasMany0.attr({
    width: Number(text_email_hasMany0.node.attributes.x.value) + (Number(text_email_hasMany0.node.textContent.length) * 10 + 30)
});
line_email_hasMany0.attr({
    x2: (block_email_hasMany0.node.width.animVal.value + block_email_hasMany0.node.x.animVal.value)
})-->*/

//tooltip on checkbox...
var select_title_email_hasMany0 = Snap.parse('<title>Click here to select model for CRUD Operations , if unchecked Crud form are not created</title>');

//select box checked when modal form is created
var select_email_hasMany0 = email_hasMany0.rect(0, 0, 15, 15, 2, 2);
select_email_hasMany0.attr({
    x: (block_email_hasMany0.node.width.animVal.value + block_email_hasMany0.node.x.animVal.value - 10),
    y: (block_email_hasMany0.node.y.animVal.value - 10),
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 2
});
select_email_hasMany0.append(select_title_email_hasMany0);

//check symbol inside select box...
var tick_path_email_hasMany0 = "M " + (select_email_hasMany0.node.x.animVal.value + 3) + " " + (select_email_hasMany0.node.y.animVal.value + 5) + "L " + (select_email_hasMany0.node.x.animVal.value + 7) + " " + (select_email_hasMany0.node.y.animVal.value + 10) + "L " + (select_email_hasMany0.node.x.animVal.value + select_email_hasMany0.node.width.animVal.value) + " " + (select_email_hasMany0.node.y.animVal.value - 3);
var tick_email_hasMany0 = email_hasMany0.path(tick_path_email_hasMany0)
tick_email_hasMany0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

//check and uncheck function on checkbox...
var checked_email_hasMany0 = false;
var selectCheckBox_email_hasMany0 = function () {
    if (!checked_email_hasMany0) {
        crud_opt_group_email_hasMany0.attr({
            'display': 'block'
        })
        tick_email_hasMany0.attr({ display : "block"});
        block_email_hasMany0.attr({ x : (block_customer1.node.x.animVal.value + block_customer1.node.width.animVal.value + 200)});
        checked_email_hasMany0 = true;
    } else if (checked_email_hasMany0) {
        crud_opt_group_email_hasMany0.attr({
            'display': 'none'
        })
        tick_email_hasMany0.attr({ display : "none"});
        checked_email_hasMany0 = false;
    }
};
select_email_hasMany0.click(selectCheckBox_email_hasMany0);
tick_email_hasMany0.click(selectCheckBox_email_hasMany0);

//Crud Rect...
var crud_opt_email_hasMany0 = email_hasMany0.rect(0, 0, 80, 90, 5, 5);
crud_opt_email_hasMany0.attr({
    x: (select_email_hasMany0.node.x.animVal.value + 15),
    y: (select_email_hasMany0.node.y.animVal.value + 20),
    fill: "white",
    stroke: "#1f2c39",
    'stroke-dasharray': 10
})

//Crud options inside Crud_opt rect...
var create_email_hasMany0 = email_hasMany0.text(0, 0, "-   create");
create_email_hasMany0.attr({
    x: (crud_opt_email_hasMany0.node.x.animVal.value + 5),
    y: (crud_opt_email_hasMany0.node.y.animVal.value + 20),
    'font-size': 15
});
var listing_email_hasMany0 = email_hasMany0.text(0, 0, "-   Listing");
listing_email_hasMany0.attr({
    x: (crud_opt_email_hasMany0.node.x.animVal.value + 5),
    y: (crud_opt_email_hasMany0.node.y.animVal.value + 40),
    'font-size': 15
});
var update_email_hasMany0 = email_hasMany0.text(0, 0, "-   update");
update_email_hasMany0.attr({
    x: (crud_opt_email_hasMany0.node.x.animVal.value + 5),
    y: (crud_opt_email_hasMany0.node.y.animVal.value + 60),
    'font-size': 15
});
var deleate_email_hasMany0 = email_hasMany0.text(0, 0, "-   delete");
deleate_email_hasMany0.attr({
    x: (crud_opt_email_hasMany0.node.x.animVal.value + 5),
    y: (crud_opt_email_hasMany0.node.y.animVal.value + 80),
    'font-size': 15
});

//check and uncheck Crud options functions...
var createCheckBoxClicked_email_hasMany0 = false;
var createCheckBoxClick_email_hasMany0 = function () {
    if (!createCheckBoxClicked_email_hasMany0) {
        create_tick_email_hasMany0.attr({
            display: "block"
        });
        createCheckBoxClicked_email_hasMany0 = true;
    } else if (createCheckBoxClicked_email_hasMany0) {
        create_tick_email_hasMany0.attr({
            display: "none"
        });
        createCheckBoxClicked_email_hasMany0 = false;
    }
}

//listing check all three remaining options include listing , delete , edit
var listingCheckBoxClicked_email_hasMany0 = false;
var listingCheckBoxClick_email_hasMany0 = function () {
    if (!listingCheckBoxClicked_email_hasMany0) {
        listing_tick_email_hasMany0.attr({
            display: "block"
        });
        update_tick_email_hasMany0.attr({
            display: "block"
        });
        deleate_tick_email_hasMany0.attr({
            display: "block"
        });
        listingCheckBoxClicked_email_hasMany0 = true;
    } else if (listingCheckBoxClicked_email_hasMany0) {
        listing_tick_email_hasMany0.attr({
            display: "none"
        });
        update_tick_email_hasMany0.attr({
            display: "none"
        });
        deleate_tick_email_hasMany0.attr({
            display: "none"
        });
        listingCheckBoxClicked_email_hasMany0 = false;
    }
}

//now set checkboxes on front of Crud operations...
var createCheckBox_email_hasMany0 = email_hasMany0.rect(0, 0, 12, 12, 1, 1);
createCheckBox_email_hasMany0.attr({
    x: (Number(create_email_hasMany0.node.attributes.x.nodeValue) + 60),
    y: (create_email_hasMany0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
createCheckBox_email_hasMany0.click(createCheckBoxClick_email_hasMany0);
var listingCheckBox_email_hasMany0 = email_hasMany0.rect(0, 0, 12, 12, 1, 1);
listingCheckBox_email_hasMany0.attr({
    x: (Number(listing_email_hasMany0.node.attributes.x.nodeValue) + 60),
    y: (listing_email_hasMany0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
listingCheckBox_email_hasMany0.click(listingCheckBoxClick_email_hasMany0);
var updateCheckBox_email_hasMany0 = email_hasMany0.rect(0, 0, 12, 12, 1, 1);
updateCheckBox_email_hasMany0.attr({
    x: (Number(update_email_hasMany0.node.attributes.x.nodeValue) + 60),
    y: (update_email_hasMany0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
updateCheckBox_email_hasMany0.click(listingCheckBoxClick_email_hasMany0);
var deleateCheckBox_email_hasMany0 = email_hasMany0.rect(0, 0, 12, 12, 1, 1);
deleateCheckBox_email_hasMany0.attr({
    x: (Number(deleate_email_hasMany0.node.attributes.x.nodeValue) + 60),
    y: (deleate_email_hasMany0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
deleateCheckBox_email_hasMany0.click(listingCheckBoxClick_email_hasMany0);

//tick inside create check_box...
var create_tick_path_email_hasMany0 = "M " + (createCheckBox_email_hasMany0.node.x.animVal.value + 1) + " " + (createCheckBox_email_hasMany0.node.y.animVal.value + 6) + "L " + (createCheckBox_email_hasMany0.node.x.animVal.value + 5) + " " + (createCheckBox_email_hasMany0.node.y.animVal.value + 10) + "L " + (createCheckBox_email_hasMany0.node.x.animVal.value + createCheckBox_email_hasMany0.node.width.animVal.value) + " " + (createCheckBox_email_hasMany0.node.y.animVal.value - 2);
var create_tick_email_hasMany0 = email_hasMany0.path(create_tick_path_email_hasMany0);
create_tick_email_hasMany0.click(createCheckBoxClick_email_hasMany0);
create_tick_email_hasMany0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside listing check_box...
var listing_tick_path_email_hasMany0 = "M " + (listingCheckBox_email_hasMany0.node.x.animVal.value + 1) + " " + (listingCheckBox_email_hasMany0.node.y.animVal.value + 6) + "L " + (listingCheckBox_email_hasMany0.node.x.animVal.value + 5) + " " + (listingCheckBox_email_hasMany0.node.y.animVal.value + 10) + "L " + (listingCheckBox_email_hasMany0.node.x.animVal.value + listingCheckBox_email_hasMany0.node.width.animVal.value) + " " + (listingCheckBox_email_hasMany0.node.y.animVal.value - 2);
var listing_tick_email_hasMany0 = email_hasMany0.path(listing_tick_path_email_hasMany0);
listing_tick_email_hasMany0.click(listingCheckBoxClick_email_hasMany0);
listing_tick_email_hasMany0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var update_tick_path_email_hasMany0 = "M " + (updateCheckBox_email_hasMany0.node.x.animVal.value + 1) + " " + (updateCheckBox_email_hasMany0.node.y.animVal.value + 6) + "L " + (updateCheckBox_email_hasMany0.node.x.animVal.value + 5) + " " + (updateCheckBox_email_hasMany0.node.y.animVal.value + 10) + "L " + (updateCheckBox_email_hasMany0.node.x.animVal.value + updateCheckBox_email_hasMany0.node.width.animVal.value) + " " + (updateCheckBox_email_hasMany0.node.y.animVal.value - 2);
var update_tick_email_hasMany0 = email_hasMany0.path(update_tick_path_email_hasMany0);
update_tick_email_hasMany0.click(listingCheckBoxClick_email_hasMany0);
update_tick_email_hasMany0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var deleate_tick_path_email_hasMany0 = "M " + (deleateCheckBox_email_hasMany0.node.x.animVal.value + 1) + " " + (deleateCheckBox_email_hasMany0.node.y.animVal.value + 6) + "L " + (deleateCheckBox_email_hasMany0.node.x.animVal.value + 5) + " " + (deleateCheckBox_email_hasMany0.node.y.animVal.value + 10) + "L " + (deleateCheckBox_email_hasMany0.node.x.animVal.value + deleateCheckBox_email_hasMany0.node.width.animVal.value) + " " + (deleateCheckBox_email_hasMany0.node.y.animVal.value - 2);
var deleate_tick_email_hasMany0 = email_hasMany0.path(deleate_tick_path_email_hasMany0);
deleate_tick_email_hasMany0.click(listingCheckBoxClick_email_hasMany0);
deleate_tick_email_hasMany0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

var crud_opt_group_email_hasMany0 = email_hasMany0.group(crud_opt_email_hasMany0, create_email_hasMany0, listing_email_hasMany0, update_email_hasMany0, deleate_email_hasMany0, createCheckBox_email_hasMany0, listingCheckBox_email_hasMany0, updateCheckBox_email_hasMany0, deleateCheckBox_email_hasMany0, create_tick_email_hasMany0, listing_tick_email_hasMany0, update_tick_email_hasMany0, deleate_tick_email_hasMany0);
crud_opt_group_email_hasMany0.attr({
    'display': 'none'
})

var customer1ToEmailPath = "M " + (block_customer1.node.x.animVal.value + block_customer1.node.width.animVal.value + 100) + " " + (block_customer1.node.y.animVal.value + 50) + "V " +  (block_email_hasMany0.node.y.animVal.value + 50) + "H " +  (block_email_hasMany0.node.x.animVal.value); 


var customer1ToEmail = customer1.path(customer1ToEmailPath);
customer1ToEmail.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1
})
//polygon {Arrow at end of line toward related model}
var customer1ToEmailArrowPoints = [block_email_hasMany0.node.x.animVal.value,(block_email_hasMany0.node.y.animVal.value+50),(block_email_hasMany0.node.x.animVal.value-10),(block_email_hasMany0.node.y.animVal.value+50-10),(block_email_hasMany0.node.x.animVal.value-10),(block_email_hasMany0.node.y.animVal.value+50+10)];
var customer1ToEmailArrow = customer1.polygon(customer1ToEmailArrowPoints);
customer1ToEmailArrow.attr({
    fill: "#1f2c39",
    stroke: "#1f2c39",
    strokeWidth: 1,
});

//get access to id
var customer = Snap("#customer");

//modal rectangle...
var drag_title_customer = Snap.parse('<title>Drag and Drop here related model if exist for generate relation inside form</title>');

var block_customer = customer.rect(20, 20, 150, 100, 5, 5);
block_customer.attr({
    fill: "rgb(236, 240, 241)",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray': 5
});
block_customer.append(drag_title_customer);

var customer_rel_path = "M " + (block_customer.node.x.animVal.value + block_customer.node.width.animVal.value ) + " " + (block_customer.node.y.animVal.value + 50) + "H " + (block_customer.node.x.animVal.value + block_customer.node.width.animVal.value + 100);
var customer_rel_path_half = customer.path(customer_rel_path);
customer_rel_path_half.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1
});


//modal text populate inside modal rect...
var text_customer = customer.text(0, 0, "CUSTOMER!");
text_customer.attr({
    x: block_customer.node.x.animVal.value + 10,
    y: block_customer.node.y.animVal.value + 20,
    'font-size': 13
});
// line separates modal head and body...
var line_customer = customer.line(0, 0, 0, 0);
line_customer.attr({
    x1: block_customer.node.x.animVal.value,
    y1: Number(text_customer.node.attributes.y.nodeValue) + 5,
    x2: block_customer.node.x.animVal.value + block_customer.node.width.animVal.value,
    y2: Number(text_customer.node.attributes.y.nodeValue) + 5,
    stroke: "#1f2c39",
    strokeWidth: 1,
    strokeLinecap: "round"
});

// change coordinates of line and mode1_rect according to text
/*block_customer.attr({
    width: Number(text_customer.node.attributes.x.value) + (Number(text_customer.node.textContent.length) * 10 + 30)
});
line_customer.attr({
    x2: (block_customer.node.width.animVal.value + block_customer.node.x.animVal.value)
})*/

//tooltip on checkbox...
var select_title_customer = Snap.parse('<title>Click here to select model for CRUD Operations , if unchecked Crud form are not created</title>');

//select box checked when modal form is created
var select_customer = customer.rect(0, 0, 15, 15, 2, 2);
select_customer.attr({
    x: (block_customer.node.width.animVal.value + block_customer.node.x.animVal.value - 10),
    y: (block_customer.node.y.animVal.value - 10),
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 2
});
select_customer.append(select_title_customer);

//check symbol inside select box...
var tick_path_customer = "M " + (select_customer.node.x.animVal.value + 3) + " " + (select_customer.node.y.animVal.value + 5) + "L " + (select_customer.node.x.animVal.value + 7) + " " + (select_customer.node.y.animVal.value + 10) + "L " + (select_customer.node.x.animVal.value + select_customer.node.width.animVal.value) + " " + (select_customer.node.y.animVal.value - 3);
var tick_customer = customer.path(tick_path_customer)
tick_customer.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

//check and uncheck function on checkbox...
var checked_customer = false;
var selectCheckBox_customer = function () {
    if (!checked_customer) {
        //  crud_opt_group.removeClass('animated bounceOutUp')
        crud_opt_group_customer.attr({
            'display': 'block'
        })

        tick_customer.attr({ display : "block"});
        // crud_opt_group_customer.addClass('animated bounceInUp');
        checked_customer = true;
    } else if (checked_customer) {
        crud_opt_group_customer.attr({
            'display': 'none'
        })
        tick_customer.attr({ display : "none"});
        // crud_opt_group.removeClass('animated bounceInUp');
        // crud_opt_group.addClass('animated bounceOutUp')
        checked_customer = false;
    }
};
select_customer.click(selectCheckBox_customer);
tick_customer.click(selectCheckBox_customer);

//Crud Rect...
var crud_opt_customer = customer.rect(0, 0, 80, 90, 5, 5);
crud_opt_customer.attr({
    x: (select_customer.node.x.animVal.value + 15),
    y: (select_customer.node.y.animVal.value + 20),
    fill: "white",
    stroke: "#1f2c39",
    'stroke-dasharray': 10
})

//Crud options inside Crud_opt rect...
var create_customer = customer.text(0, 0, "-   create");
create_customer.attr({
    x: (crud_opt_customer.node.x.animVal.value + 5),
    y: (crud_opt_customer.node.y.animVal.value + 20),
    'font-size': 15
});
var listing_customer = customer.text(0, 0, "-   Listing");
listing_customer.attr({
    x: (crud_opt_customer.node.x.animVal.value + 5),
    y: (crud_opt_customer.node.y.animVal.value + 40),
    'font-size': 15
});
var update_customer = customer.text(0, 0, "-   update");
update_customer.attr({
    x: (crud_opt_customer.node.x.animVal.value + 5),
    y: (crud_opt_customer.node.y.animVal.value + 60),
    'font-size': 15
});
var deleate_customer = customer.text(0, 0, "-   delete");
deleate_customer.attr({
    x: (crud_opt_customer.node.x.animVal.value + 5),
    y: (crud_opt_customer.node.y.animVal.value + 80),
    'font-size': 15
});

//check and uncheck Crud options functions...
var createCheckBoxClicked_customer = false;
var createCheckBoxClick_customer = function () {
    if (!createCheckBoxClicked_customer) {
        create_tick_customer.attr({
            display: "block"
        });
        createCheckBoxClicked_customer = true;
    } else if (createCheckBoxClicked_customer) {
        create_tick_customer.attr({
            display: "none"
        });
        createCheckBoxClicked_customer = false;
    }
}

//listing check all three remaining options include listing , delete , edit
var listingCheckBoxClicked_customer = false;
var listingCheckBoxClick_customer = function () {
    if (!listingCheckBoxClicked_customer) {
        listing_tick_customer.attr({
            display: "block"
        });
        update_tick_customer.attr({
            display: "block"
        });
        deleate_tick_customer.attr({
            display: "block"
        });
        listingCheckBoxClicked_customer = true;
    } else if (listingCheckBoxClicked_customer) {
        listing_tick_customer.attr({
            display: "none"
        });
        update_tick_customer.attr({
            display: "none"
        });
        deleate_tick_customer.attr({
            display: "none"
        });
        listingCheckBoxClicked_customer = false;
    }
}

//now set checkboxes on front of Crud operations...
var createCheckBox_customer = customer.rect(0, 0, 12, 12, 1, 1);
createCheckBox_customer.attr({
    x: (Number(create_customer.node.attributes.x.nodeValue) + 60),
    y: (create_customer.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
createCheckBox_customer.click(createCheckBoxClick_customer);
var listingCheckBox_customer = customer.rect(0, 0, 12, 12, 1, 1);
listingCheckBox_customer.attr({
    x: (Number(listing_customer.node.attributes.x.nodeValue) + 60),
    y: (listing_customer.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
listingCheckBox_customer.click(listingCheckBoxClick_customer);
var updateCheckBox_customer = customer.rect(0, 0, 12, 12, 1, 1);
updateCheckBox_customer.attr({
    x: (Number(update_customer.node.attributes.x.nodeValue) + 60),
    y: (update_customer.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
updateCheckBox_customer.click(listingCheckBoxClick_customer);
var deleateCheckBox_customer = customer.rect(0, 0, 12, 12, 1, 1);
deleateCheckBox_customer.attr({
    x: (Number(deleate_customer.node.attributes.x.nodeValue) + 60),
    y: (deleate_customer.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
deleateCheckBox_customer.click(listingCheckBoxClick_customer);

//tick inside create check_box...
var create_tick_path_customer = "M " + (createCheckBox_customer.node.x.animVal.value + 1) + " " + (createCheckBox_customer.node.y.animVal.value + 6) + "L " + (createCheckBox_customer.node.x.animVal.value + 5) + " " + (createCheckBox_customer.node.y.animVal.value + 10) + "L " + (createCheckBox_customer.node.x.animVal.value + createCheckBox_customer.node.width.animVal.value) + " " + (createCheckBox_customer.node.y.animVal.value - 2);
var create_tick_customer = customer.path(create_tick_path_customer);
create_tick_customer.click(createCheckBoxClick_customer);
create_tick_customer.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside listing check_box...
var listing_tick_path_customer = "M " + (listingCheckBox_customer.node.x.animVal.value + 1) + " " + (listingCheckBox_customer.node.y.animVal.value + 6) + "L " + (listingCheckBox_customer.node.x.animVal.value + 5) + " " + (listingCheckBox_customer.node.y.animVal.value + 10) + "L " + (listingCheckBox_customer.node.x.animVal.value + listingCheckBox_customer.node.width.animVal.value) + " " + (listingCheckBox_customer.node.y.animVal.value - 2);
var listing_tick_customer = customer.path(listing_tick_path_customer);
listing_tick_customer.click(listingCheckBoxClick_customer);
listing_tick_customer.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var update_tick_path_customer = "M " + (updateCheckBox_customer.node.x.animVal.value + 1) + " " + (updateCheckBox_customer.node.y.animVal.value + 6) + "L " + (updateCheckBox_customer.node.x.animVal.value + 5) + " " + (updateCheckBox_customer.node.y.animVal.value + 10) + "L " + (updateCheckBox_customer.node.x.animVal.value + updateCheckBox_customer.node.width.animVal.value) + " " + (updateCheckBox_customer.node.y.animVal.value - 2);
var update_tick_customer = customer.path(update_tick_path_customer);
update_tick_customer.click(listingCheckBoxClick_customer);
update_tick_customer.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var deleate_tick_path_customer = "M " + (deleateCheckBox_customer.node.x.animVal.value + 1) + " " + (deleateCheckBox_customer.node.y.animVal.value + 6) + "L " + (deleateCheckBox_customer.node.x.animVal.value + 5) + " " + (deleateCheckBox_customer.node.y.animVal.value + 10) + "L " + (deleateCheckBox_customer.node.x.animVal.value + deleateCheckBox_customer.node.width.animVal.value) + " " + (deleateCheckBox_customer.node.y.animVal.value - 2);
var deleate_tick_customer = customer.path(deleate_tick_path_customer);
deleate_tick_customer.click(listingCheckBoxClick_customer);
deleate_tick_customer.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

var crud_opt_group_customer = customer.group(crud_opt_customer, create_customer, listing_customer, update_customer, deleate_customer, createCheckBox_customer, listingCheckBox_customer, updateCheckBox_customer, deleateCheckBox_customer, create_tick_customer, listing_tick_customer, update_tick_customer, deleate_tick_customer);
crud_opt_group_customer.attr({
    'display': 'none'
})
//relative modals svg...

var order1_hasMany0 = Snap("#customer");

//modal rectangle...
var drag_title_order1_hasMany0 = Snap.parse('<title>Drag and Drop here related model if exist for generate relation inside form</title>');

var block_order1_hasMany0 = order1_hasMany0.rect(20, 20, 150, 100, 5, 5);
block_order1_hasMany0.attr({
    x: (block_customer.node.x.animVal.value + block_customer.node.width.animVal.value + 200),
    width : (block_customer.node.width.animVal.value),
    fill: "rgb(236, 240, 241)",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray': 5 
});


block_order1_hasMany0.append(drag_title_order1_hasMany0);


//modal text populate inside modal rect...
var text_order1_hasMany0 = order1_hasMany0.text(0, 0, "ORDER1!");
text_order1_hasMany0.attr({
    x: block_order1_hasMany0.node.x.animVal.value + 10,
    y: block_order1_hasMany0.node.y.animVal.value + 20,
    'font-size': 13
});
// line separates modal head and body...
var line_order1_hasMany0 = order1_hasMany0.line(0, 0, 0, 0);
line_order1_hasMany0.attr({
    x1: block_order1_hasMany0.node.x.animVal.value,
    y1: Number(text_order1_hasMany0.node.attributes.y.nodeValue) + 5,
    x2: block_order1_hasMany0.node.x.animVal.value + block_order1_hasMany0.node.width.animVal.value,
    y2: Number(text_order1_hasMany0.node.attributes.y.nodeValue) + 5,
    stroke: "#1f2c39",
    strokeWidth: 1,
    strokeLinecap: "round"
});

// change coordinates of line and mode1_rect according to text
/*<!--block_order1_hasMany0.attr({
    width: Number(text_order1_hasMany0.node.attributes.x.value) + (Number(text_order1_hasMany0.node.textContent.length) * 10 + 30)
});
line_order1_hasMany0.attr({
    x2: (block_order1_hasMany0.node.width.animVal.value + block_order1_hasMany0.node.x.animVal.value)
})-->*/

//tooltip on checkbox...
var select_title_order1_hasMany0 = Snap.parse('<title>Click here to select model for CRUD Operations , if unchecked Crud form are not created</title>');

//select box checked when modal form is created
var select_order1_hasMany0 = order1_hasMany0.rect(0, 0, 15, 15, 2, 2);
select_order1_hasMany0.attr({
    x: (block_order1_hasMany0.node.width.animVal.value + block_order1_hasMany0.node.x.animVal.value - 10),
    y: (block_order1_hasMany0.node.y.animVal.value - 10),
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 2
});
select_order1_hasMany0.append(select_title_order1_hasMany0);

//check symbol inside select box...
var tick_path_order1_hasMany0 = "M " + (select_order1_hasMany0.node.x.animVal.value + 3) + " " + (select_order1_hasMany0.node.y.animVal.value + 5) + "L " + (select_order1_hasMany0.node.x.animVal.value + 7) + " " + (select_order1_hasMany0.node.y.animVal.value + 10) + "L " + (select_order1_hasMany0.node.x.animVal.value + select_order1_hasMany0.node.width.animVal.value) + " " + (select_order1_hasMany0.node.y.animVal.value - 3);
var tick_order1_hasMany0 = order1_hasMany0.path(tick_path_order1_hasMany0)
tick_order1_hasMany0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

//check and uncheck function on checkbox...
var checked_order1_hasMany0 = false;
var selectCheckBox_order1_hasMany0 = function () {
    if (!checked_order1_hasMany0) {
        crud_opt_group_order1_hasMany0.attr({
            'display': 'block'
        })
        tick_order1_hasMany0.attr({ display : "block"});
        block_order1_hasMany0.attr({ x : (block_customer.node.x.animVal.value + block_customer.node.width.animVal.value + 200)});
        checked_order1_hasMany0 = true;
    } else if (checked_order1_hasMany0) {
        crud_opt_group_order1_hasMany0.attr({
            'display': 'none'
        })
        tick_order1_hasMany0.attr({ display : "none"});
        checked_order1_hasMany0 = false;
    }
};
select_order1_hasMany0.click(selectCheckBox_order1_hasMany0);
tick_order1_hasMany0.click(selectCheckBox_order1_hasMany0);

//Crud Rect...
var crud_opt_order1_hasMany0 = order1_hasMany0.rect(0, 0, 80, 90, 5, 5);
crud_opt_order1_hasMany0.attr({
    x: (select_order1_hasMany0.node.x.animVal.value + 15),
    y: (select_order1_hasMany0.node.y.animVal.value + 20),
    fill: "white",
    stroke: "#1f2c39",
    'stroke-dasharray': 10
})

//Crud options inside Crud_opt rect...
var create_order1_hasMany0 = order1_hasMany0.text(0, 0, "-   create");
create_order1_hasMany0.attr({
    x: (crud_opt_order1_hasMany0.node.x.animVal.value + 5),
    y: (crud_opt_order1_hasMany0.node.y.animVal.value + 20),
    'font-size': 15
});
var listing_order1_hasMany0 = order1_hasMany0.text(0, 0, "-   Listing");
listing_order1_hasMany0.attr({
    x: (crud_opt_order1_hasMany0.node.x.animVal.value + 5),
    y: (crud_opt_order1_hasMany0.node.y.animVal.value + 40),
    'font-size': 15
});
var update_order1_hasMany0 = order1_hasMany0.text(0, 0, "-   update");
update_order1_hasMany0.attr({
    x: (crud_opt_order1_hasMany0.node.x.animVal.value + 5),
    y: (crud_opt_order1_hasMany0.node.y.animVal.value + 60),
    'font-size': 15
});
var deleate_order1_hasMany0 = order1_hasMany0.text(0, 0, "-   delete");
deleate_order1_hasMany0.attr({
    x: (crud_opt_order1_hasMany0.node.x.animVal.value + 5),
    y: (crud_opt_order1_hasMany0.node.y.animVal.value + 80),
    'font-size': 15
});

//check and uncheck Crud options functions...
var createCheckBoxClicked_order1_hasMany0 = false;
var createCheckBoxClick_order1_hasMany0 = function () {
    if (!createCheckBoxClicked_order1_hasMany0) {
        create_tick_order1_hasMany0.attr({
            display: "block"
        });
        createCheckBoxClicked_order1_hasMany0 = true;
    } else if (createCheckBoxClicked_order1_hasMany0) {
        create_tick_order1_hasMany0.attr({
            display: "none"
        });
        createCheckBoxClicked_order1_hasMany0 = false;
    }
}

//listing check all three remaining options include listing , delete , edit
var listingCheckBoxClicked_order1_hasMany0 = false;
var listingCheckBoxClick_order1_hasMany0 = function () {
    if (!listingCheckBoxClicked_order1_hasMany0) {
        listing_tick_order1_hasMany0.attr({
            display: "block"
        });
        update_tick_order1_hasMany0.attr({
            display: "block"
        });
        deleate_tick_order1_hasMany0.attr({
            display: "block"
        });
        listingCheckBoxClicked_order1_hasMany0 = true;
    } else if (listingCheckBoxClicked_order1_hasMany0) {
        listing_tick_order1_hasMany0.attr({
            display: "none"
        });
        update_tick_order1_hasMany0.attr({
            display: "none"
        });
        deleate_tick_order1_hasMany0.attr({
            display: "none"
        });
        listingCheckBoxClicked_order1_hasMany0 = false;
    }
}

//now set checkboxes on front of Crud operations...
var createCheckBox_order1_hasMany0 = order1_hasMany0.rect(0, 0, 12, 12, 1, 1);
createCheckBox_order1_hasMany0.attr({
    x: (Number(create_order1_hasMany0.node.attributes.x.nodeValue) + 60),
    y: (create_order1_hasMany0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
createCheckBox_order1_hasMany0.click(createCheckBoxClick_order1_hasMany0);
var listingCheckBox_order1_hasMany0 = order1_hasMany0.rect(0, 0, 12, 12, 1, 1);
listingCheckBox_order1_hasMany0.attr({
    x: (Number(listing_order1_hasMany0.node.attributes.x.nodeValue) + 60),
    y: (listing_order1_hasMany0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
listingCheckBox_order1_hasMany0.click(listingCheckBoxClick_order1_hasMany0);
var updateCheckBox_order1_hasMany0 = order1_hasMany0.rect(0, 0, 12, 12, 1, 1);
updateCheckBox_order1_hasMany0.attr({
    x: (Number(update_order1_hasMany0.node.attributes.x.nodeValue) + 60),
    y: (update_order1_hasMany0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
updateCheckBox_order1_hasMany0.click(listingCheckBoxClick_order1_hasMany0);
var deleateCheckBox_order1_hasMany0 = order1_hasMany0.rect(0, 0, 12, 12, 1, 1);
deleateCheckBox_order1_hasMany0.attr({
    x: (Number(deleate_order1_hasMany0.node.attributes.x.nodeValue) + 60),
    y: (deleate_order1_hasMany0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
deleateCheckBox_order1_hasMany0.click(listingCheckBoxClick_order1_hasMany0);

//tick inside create check_box...
var create_tick_path_order1_hasMany0 = "M " + (createCheckBox_order1_hasMany0.node.x.animVal.value + 1) + " " + (createCheckBox_order1_hasMany0.node.y.animVal.value + 6) + "L " + (createCheckBox_order1_hasMany0.node.x.animVal.value + 5) + " " + (createCheckBox_order1_hasMany0.node.y.animVal.value + 10) + "L " + (createCheckBox_order1_hasMany0.node.x.animVal.value + createCheckBox_order1_hasMany0.node.width.animVal.value) + " " + (createCheckBox_order1_hasMany0.node.y.animVal.value - 2);
var create_tick_order1_hasMany0 = order1_hasMany0.path(create_tick_path_order1_hasMany0);
create_tick_order1_hasMany0.click(createCheckBoxClick_order1_hasMany0);
create_tick_order1_hasMany0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside listing check_box...
var listing_tick_path_order1_hasMany0 = "M " + (listingCheckBox_order1_hasMany0.node.x.animVal.value + 1) + " " + (listingCheckBox_order1_hasMany0.node.y.animVal.value + 6) + "L " + (listingCheckBox_order1_hasMany0.node.x.animVal.value + 5) + " " + (listingCheckBox_order1_hasMany0.node.y.animVal.value + 10) + "L " + (listingCheckBox_order1_hasMany0.node.x.animVal.value + listingCheckBox_order1_hasMany0.node.width.animVal.value) + " " + (listingCheckBox_order1_hasMany0.node.y.animVal.value - 2);
var listing_tick_order1_hasMany0 = order1_hasMany0.path(listing_tick_path_order1_hasMany0);
listing_tick_order1_hasMany0.click(listingCheckBoxClick_order1_hasMany0);
listing_tick_order1_hasMany0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var update_tick_path_order1_hasMany0 = "M " + (updateCheckBox_order1_hasMany0.node.x.animVal.value + 1) + " " + (updateCheckBox_order1_hasMany0.node.y.animVal.value + 6) + "L " + (updateCheckBox_order1_hasMany0.node.x.animVal.value + 5) + " " + (updateCheckBox_order1_hasMany0.node.y.animVal.value + 10) + "L " + (updateCheckBox_order1_hasMany0.node.x.animVal.value + updateCheckBox_order1_hasMany0.node.width.animVal.value) + " " + (updateCheckBox_order1_hasMany0.node.y.animVal.value - 2);
var update_tick_order1_hasMany0 = order1_hasMany0.path(update_tick_path_order1_hasMany0);
update_tick_order1_hasMany0.click(listingCheckBoxClick_order1_hasMany0);
update_tick_order1_hasMany0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var deleate_tick_path_order1_hasMany0 = "M " + (deleateCheckBox_order1_hasMany0.node.x.animVal.value + 1) + " " + (deleateCheckBox_order1_hasMany0.node.y.animVal.value + 6) + "L " + (deleateCheckBox_order1_hasMany0.node.x.animVal.value + 5) + " " + (deleateCheckBox_order1_hasMany0.node.y.animVal.value + 10) + "L " + (deleateCheckBox_order1_hasMany0.node.x.animVal.value + deleateCheckBox_order1_hasMany0.node.width.animVal.value) + " " + (deleateCheckBox_order1_hasMany0.node.y.animVal.value - 2);
var deleate_tick_order1_hasMany0 = order1_hasMany0.path(deleate_tick_path_order1_hasMany0);
deleate_tick_order1_hasMany0.click(listingCheckBoxClick_order1_hasMany0);
deleate_tick_order1_hasMany0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

var crud_opt_group_order1_hasMany0 = order1_hasMany0.group(crud_opt_order1_hasMany0, create_order1_hasMany0, listing_order1_hasMany0, update_order1_hasMany0, deleate_order1_hasMany0, createCheckBox_order1_hasMany0, listingCheckBox_order1_hasMany0, updateCheckBox_order1_hasMany0, deleateCheckBox_order1_hasMany0, create_tick_order1_hasMany0, listing_tick_order1_hasMany0, update_tick_order1_hasMany0, deleate_tick_order1_hasMany0);
crud_opt_group_order1_hasMany0.attr({
    'display': 'none'
})

var customerToOrder1Path = "M " + (block_customer.node.x.animVal.value + block_customer.node.width.animVal.value + 100) + " " + (block_customer.node.y.animVal.value + 50) + "V " +  (block_order1_hasMany0.node.y.animVal.value + 50) + "H " +  (block_order1_hasMany0.node.x.animVal.value); 


var customerToOrder1 = customer.path(customerToOrder1Path);
customerToOrder1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1
})
//polygon {Arrow at end of line toward related model}
var customerToOrder1ArrowPoints = [block_order1_hasMany0.node.x.animVal.value,(block_order1_hasMany0.node.y.animVal.value+50),(block_order1_hasMany0.node.x.animVal.value-10),(block_order1_hasMany0.node.y.animVal.value+50-10),(block_order1_hasMany0.node.x.animVal.value-10),(block_order1_hasMany0.node.y.animVal.value+50+10)];
var customerToOrder1Arrow = customer.polygon(customerToOrder1ArrowPoints);
customerToOrder1Arrow.attr({
    fill: "#1f2c39",
    stroke: "#1f2c39",
    strokeWidth: 1,
});

var email_hasMany1 = Snap("#customer");

//modal rectangle...
var drag_title_email_hasMany1 = Snap.parse('<title>Drag and Drop here related model if exist for generate relation inside form</title>');

var block_email_hasMany1 = email_hasMany1.rect(20, 20, 150, 100, 5, 5);
block_email_hasMany1.attr({
    x: (block_customer.node.x.animVal.value + block_customer.node.width.animVal.value + 200),
    width : (block_customer.node.width.animVal.value),
    fill: "rgb(236, 240, 241)",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray': 5 
});


    block_email_hasMany1.attr({
        y: (block_order1_hasMany0.node.y.animVal.value + block_order1_hasMany0.node.height.animVal.value + 20)
    });

block_email_hasMany1.append(drag_title_email_hasMany1);


//modal text populate inside modal rect...
var text_email_hasMany1 = email_hasMany1.text(0, 0, "EMAIL!");
text_email_hasMany1.attr({
    x: block_email_hasMany1.node.x.animVal.value + 10,
    y: block_email_hasMany1.node.y.animVal.value + 20,
    'font-size': 13
});
// line separates modal head and body...
var line_email_hasMany1 = email_hasMany1.line(0, 0, 0, 0);
line_email_hasMany1.attr({
    x1: block_email_hasMany1.node.x.animVal.value,
    y1: Number(text_email_hasMany1.node.attributes.y.nodeValue) + 5,
    x2: block_email_hasMany1.node.x.animVal.value + block_email_hasMany1.node.width.animVal.value,
    y2: Number(text_email_hasMany1.node.attributes.y.nodeValue) + 5,
    stroke: "#1f2c39",
    strokeWidth: 1,
    strokeLinecap: "round"
});

// change coordinates of line and mode1_rect according to text
/*<!--block_email_hasMany1.attr({
    width: Number(text_email_hasMany1.node.attributes.x.value) + (Number(text_email_hasMany1.node.textContent.length) * 10 + 30)
});
line_email_hasMany1.attr({
    x2: (block_email_hasMany1.node.width.animVal.value + block_email_hasMany1.node.x.animVal.value)
})-->*/

//tooltip on checkbox...
var select_title_email_hasMany1 = Snap.parse('<title>Click here to select model for CRUD Operations , if unchecked Crud form are not created</title>');

//select box checked when modal form is created
var select_email_hasMany1 = email_hasMany1.rect(0, 0, 15, 15, 2, 2);
select_email_hasMany1.attr({
    x: (block_email_hasMany1.node.width.animVal.value + block_email_hasMany1.node.x.animVal.value - 10),
    y: (block_email_hasMany1.node.y.animVal.value - 10),
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 2
});
select_email_hasMany1.append(select_title_email_hasMany1);

//check symbol inside select box...
var tick_path_email_hasMany1 = "M " + (select_email_hasMany1.node.x.animVal.value + 3) + " " + (select_email_hasMany1.node.y.animVal.value + 5) + "L " + (select_email_hasMany1.node.x.animVal.value + 7) + " " + (select_email_hasMany1.node.y.animVal.value + 10) + "L " + (select_email_hasMany1.node.x.animVal.value + select_email_hasMany1.node.width.animVal.value) + " " + (select_email_hasMany1.node.y.animVal.value - 3);
var tick_email_hasMany1 = email_hasMany1.path(tick_path_email_hasMany1)
tick_email_hasMany1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

//check and uncheck function on checkbox...
var checked_email_hasMany1 = false;
var selectCheckBox_email_hasMany1 = function () {
    if (!checked_email_hasMany1) {
        crud_opt_group_email_hasMany1.attr({
            'display': 'block'
        })
        tick_email_hasMany1.attr({ display : "block"});
        block_email_hasMany1.attr({ x : (block_customer.node.x.animVal.value + block_customer.node.width.animVal.value + 200)});
        checked_email_hasMany1 = true;
    } else if (checked_email_hasMany1) {
        crud_opt_group_email_hasMany1.attr({
            'display': 'none'
        })
        tick_email_hasMany1.attr({ display : "none"});
        checked_email_hasMany1 = false;
    }
};
select_email_hasMany1.click(selectCheckBox_email_hasMany1);
tick_email_hasMany1.click(selectCheckBox_email_hasMany1);

//Crud Rect...
var crud_opt_email_hasMany1 = email_hasMany1.rect(0, 0, 80, 90, 5, 5);
crud_opt_email_hasMany1.attr({
    x: (select_email_hasMany1.node.x.animVal.value + 15),
    y: (select_email_hasMany1.node.y.animVal.value + 20),
    fill: "white",
    stroke: "#1f2c39",
    'stroke-dasharray': 10
})

//Crud options inside Crud_opt rect...
var create_email_hasMany1 = email_hasMany1.text(0, 0, "-   create");
create_email_hasMany1.attr({
    x: (crud_opt_email_hasMany1.node.x.animVal.value + 5),
    y: (crud_opt_email_hasMany1.node.y.animVal.value + 20),
    'font-size': 15
});
var listing_email_hasMany1 = email_hasMany1.text(0, 0, "-   Listing");
listing_email_hasMany1.attr({
    x: (crud_opt_email_hasMany1.node.x.animVal.value + 5),
    y: (crud_opt_email_hasMany1.node.y.animVal.value + 40),
    'font-size': 15
});
var update_email_hasMany1 = email_hasMany1.text(0, 0, "-   update");
update_email_hasMany1.attr({
    x: (crud_opt_email_hasMany1.node.x.animVal.value + 5),
    y: (crud_opt_email_hasMany1.node.y.animVal.value + 60),
    'font-size': 15
});
var deleate_email_hasMany1 = email_hasMany1.text(0, 0, "-   delete");
deleate_email_hasMany1.attr({
    x: (crud_opt_email_hasMany1.node.x.animVal.value + 5),
    y: (crud_opt_email_hasMany1.node.y.animVal.value + 80),
    'font-size': 15
});

//check and uncheck Crud options functions...
var createCheckBoxClicked_email_hasMany1 = false;
var createCheckBoxClick_email_hasMany1 = function () {
    if (!createCheckBoxClicked_email_hasMany1) {
        create_tick_email_hasMany1.attr({
            display: "block"
        });
        createCheckBoxClicked_email_hasMany1 = true;
    } else if (createCheckBoxClicked_email_hasMany1) {
        create_tick_email_hasMany1.attr({
            display: "none"
        });
        createCheckBoxClicked_email_hasMany1 = false;
    }
}

//listing check all three remaining options include listing , delete , edit
var listingCheckBoxClicked_email_hasMany1 = false;
var listingCheckBoxClick_email_hasMany1 = function () {
    if (!listingCheckBoxClicked_email_hasMany1) {
        listing_tick_email_hasMany1.attr({
            display: "block"
        });
        update_tick_email_hasMany1.attr({
            display: "block"
        });
        deleate_tick_email_hasMany1.attr({
            display: "block"
        });
        listingCheckBoxClicked_email_hasMany1 = true;
    } else if (listingCheckBoxClicked_email_hasMany1) {
        listing_tick_email_hasMany1.attr({
            display: "none"
        });
        update_tick_email_hasMany1.attr({
            display: "none"
        });
        deleate_tick_email_hasMany1.attr({
            display: "none"
        });
        listingCheckBoxClicked_email_hasMany1 = false;
    }
}

//now set checkboxes on front of Crud operations...
var createCheckBox_email_hasMany1 = email_hasMany1.rect(0, 0, 12, 12, 1, 1);
createCheckBox_email_hasMany1.attr({
    x: (Number(create_email_hasMany1.node.attributes.x.nodeValue) + 60),
    y: (create_email_hasMany1.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
createCheckBox_email_hasMany1.click(createCheckBoxClick_email_hasMany1);
var listingCheckBox_email_hasMany1 = email_hasMany1.rect(0, 0, 12, 12, 1, 1);
listingCheckBox_email_hasMany1.attr({
    x: (Number(listing_email_hasMany1.node.attributes.x.nodeValue) + 60),
    y: (listing_email_hasMany1.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
listingCheckBox_email_hasMany1.click(listingCheckBoxClick_email_hasMany1);
var updateCheckBox_email_hasMany1 = email_hasMany1.rect(0, 0, 12, 12, 1, 1);
updateCheckBox_email_hasMany1.attr({
    x: (Number(update_email_hasMany1.node.attributes.x.nodeValue) + 60),
    y: (update_email_hasMany1.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
updateCheckBox_email_hasMany1.click(listingCheckBoxClick_email_hasMany1);
var deleateCheckBox_email_hasMany1 = email_hasMany1.rect(0, 0, 12, 12, 1, 1);
deleateCheckBox_email_hasMany1.attr({
    x: (Number(deleate_email_hasMany1.node.attributes.x.nodeValue) + 60),
    y: (deleate_email_hasMany1.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
deleateCheckBox_email_hasMany1.click(listingCheckBoxClick_email_hasMany1);

//tick inside create check_box...
var create_tick_path_email_hasMany1 = "M " + (createCheckBox_email_hasMany1.node.x.animVal.value + 1) + " " + (createCheckBox_email_hasMany1.node.y.animVal.value + 6) + "L " + (createCheckBox_email_hasMany1.node.x.animVal.value + 5) + " " + (createCheckBox_email_hasMany1.node.y.animVal.value + 10) + "L " + (createCheckBox_email_hasMany1.node.x.animVal.value + createCheckBox_email_hasMany1.node.width.animVal.value) + " " + (createCheckBox_email_hasMany1.node.y.animVal.value - 2);
var create_tick_email_hasMany1 = email_hasMany1.path(create_tick_path_email_hasMany1);
create_tick_email_hasMany1.click(createCheckBoxClick_email_hasMany1);
create_tick_email_hasMany1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside listing check_box...
var listing_tick_path_email_hasMany1 = "M " + (listingCheckBox_email_hasMany1.node.x.animVal.value + 1) + " " + (listingCheckBox_email_hasMany1.node.y.animVal.value + 6) + "L " + (listingCheckBox_email_hasMany1.node.x.animVal.value + 5) + " " + (listingCheckBox_email_hasMany1.node.y.animVal.value + 10) + "L " + (listingCheckBox_email_hasMany1.node.x.animVal.value + listingCheckBox_email_hasMany1.node.width.animVal.value) + " " + (listingCheckBox_email_hasMany1.node.y.animVal.value - 2);
var listing_tick_email_hasMany1 = email_hasMany1.path(listing_tick_path_email_hasMany1);
listing_tick_email_hasMany1.click(listingCheckBoxClick_email_hasMany1);
listing_tick_email_hasMany1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var update_tick_path_email_hasMany1 = "M " + (updateCheckBox_email_hasMany1.node.x.animVal.value + 1) + " " + (updateCheckBox_email_hasMany1.node.y.animVal.value + 6) + "L " + (updateCheckBox_email_hasMany1.node.x.animVal.value + 5) + " " + (updateCheckBox_email_hasMany1.node.y.animVal.value + 10) + "L " + (updateCheckBox_email_hasMany1.node.x.animVal.value + updateCheckBox_email_hasMany1.node.width.animVal.value) + " " + (updateCheckBox_email_hasMany1.node.y.animVal.value - 2);
var update_tick_email_hasMany1 = email_hasMany1.path(update_tick_path_email_hasMany1);
update_tick_email_hasMany1.click(listingCheckBoxClick_email_hasMany1);
update_tick_email_hasMany1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var deleate_tick_path_email_hasMany1 = "M " + (deleateCheckBox_email_hasMany1.node.x.animVal.value + 1) + " " + (deleateCheckBox_email_hasMany1.node.y.animVal.value + 6) + "L " + (deleateCheckBox_email_hasMany1.node.x.animVal.value + 5) + " " + (deleateCheckBox_email_hasMany1.node.y.animVal.value + 10) + "L " + (deleateCheckBox_email_hasMany1.node.x.animVal.value + deleateCheckBox_email_hasMany1.node.width.animVal.value) + " " + (deleateCheckBox_email_hasMany1.node.y.animVal.value - 2);
var deleate_tick_email_hasMany1 = email_hasMany1.path(deleate_tick_path_email_hasMany1);
deleate_tick_email_hasMany1.click(listingCheckBoxClick_email_hasMany1);
deleate_tick_email_hasMany1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

var crud_opt_group_email_hasMany1 = email_hasMany1.group(crud_opt_email_hasMany1, create_email_hasMany1, listing_email_hasMany1, update_email_hasMany1, deleate_email_hasMany1, createCheckBox_email_hasMany1, listingCheckBox_email_hasMany1, updateCheckBox_email_hasMany1, deleateCheckBox_email_hasMany1, create_tick_email_hasMany1, listing_tick_email_hasMany1, update_tick_email_hasMany1, deleate_tick_email_hasMany1);
crud_opt_group_email_hasMany1.attr({
    'display': 'none'
})

var customerToEmailPath = "M " + (block_customer.node.x.animVal.value + block_customer.node.width.animVal.value + 100) + " " + (block_order1_hasMany0.node.y.animVal.value + 50) + "V " +  (block_email_hasMany1.node.y.animVal.value + 50) + "H " +  (block_email_hasMany1.node.x.animVal.value); 


var customerToEmail = customer.path(customerToEmailPath);
customerToEmail.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1
})
//polygon {Arrow at end of line toward related model}
var customerToEmailArrowPoints = [block_email_hasMany1.node.x.animVal.value,(block_email_hasMany1.node.y.animVal.value+50),(block_email_hasMany1.node.x.animVal.value-10),(block_email_hasMany1.node.y.animVal.value+50-10),(block_email_hasMany1.node.x.animVal.value-10),(block_email_hasMany1.node.y.animVal.value+50+10)];
var customerToEmailArrow = customer.polygon(customerToEmailArrowPoints);
customerToEmailArrow.attr({
    fill: "#1f2c39",
    stroke: "#1f2c39",
    strokeWidth: 1,
});

//get access to id
var doctor = Snap("#doctor");

//modal rectangle...
var drag_title_doctor = Snap.parse('<title>Drag and Drop here related model if exist for generate relation inside form</title>');

var block_doctor = doctor.rect(20, 20, 150, 100, 5, 5);
block_doctor.attr({
    fill: "rgb(236, 240, 241)",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray': 5
});
block_doctor.append(drag_title_doctor);

var doctor_rel_path = "M " + (block_doctor.node.x.animVal.value + block_doctor.node.width.animVal.value ) + " " + (block_doctor.node.y.animVal.value + 50) + "H " + (block_doctor.node.x.animVal.value + block_doctor.node.width.animVal.value + 100);
var doctor_rel_path_half = doctor.path(doctor_rel_path);
doctor_rel_path_half.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1
});

    var doctor_rel_path_linkModel = "M " + (block_doctor.node.x.animVal.value + block_doctor.node.width.animVal.value ) + " " + (block_doctor.node.y.animVal.value + 60) + "H " + (block_doctor.node.x.animVal.value + block_doctor.node.width.animVal.value + 450);        
    var doctor_rel_path_half_LinkModel = doctor.path(doctor_rel_path_linkModel);
    doctor_rel_path_half_LinkModel.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray' : 5
});


//modal text populate inside modal rect...
var text_doctor = doctor.text(0, 0, "DOCTOR!");
text_doctor.attr({
    x: block_doctor.node.x.animVal.value + 10,
    y: block_doctor.node.y.animVal.value + 20,
    'font-size': 13
});
// line separates modal head and body...
var line_doctor = doctor.line(0, 0, 0, 0);
line_doctor.attr({
    x1: block_doctor.node.x.animVal.value,
    y1: Number(text_doctor.node.attributes.y.nodeValue) + 5,
    x2: block_doctor.node.x.animVal.value + block_doctor.node.width.animVal.value,
    y2: Number(text_doctor.node.attributes.y.nodeValue) + 5,
    stroke: "#1f2c39",
    strokeWidth: 1,
    strokeLinecap: "round"
});

// change coordinates of line and mode1_rect according to text
/*block_doctor.attr({
    width: Number(text_doctor.node.attributes.x.value) + (Number(text_doctor.node.textContent.length) * 10 + 30)
});
line_doctor.attr({
    x2: (block_doctor.node.width.animVal.value + block_doctor.node.x.animVal.value)
})*/

//tooltip on checkbox...
var select_title_doctor = Snap.parse('<title>Click here to select model for CRUD Operations , if unchecked Crud form are not created</title>');

//select box checked when modal form is created
var select_doctor = doctor.rect(0, 0, 15, 15, 2, 2);
select_doctor.attr({
    x: (block_doctor.node.width.animVal.value + block_doctor.node.x.animVal.value - 10),
    y: (block_doctor.node.y.animVal.value - 10),
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 2
});
select_doctor.append(select_title_doctor);

//check symbol inside select box...
var tick_path_doctor = "M " + (select_doctor.node.x.animVal.value + 3) + " " + (select_doctor.node.y.animVal.value + 5) + "L " + (select_doctor.node.x.animVal.value + 7) + " " + (select_doctor.node.y.animVal.value + 10) + "L " + (select_doctor.node.x.animVal.value + select_doctor.node.width.animVal.value) + " " + (select_doctor.node.y.animVal.value - 3);
var tick_doctor = doctor.path(tick_path_doctor)
tick_doctor.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

//check and uncheck function on checkbox...
var checked_doctor = false;
var selectCheckBox_doctor = function () {
    if (!checked_doctor) {
        //  crud_opt_group.removeClass('animated bounceOutUp')
        crud_opt_group_doctor.attr({
            'display': 'block'
        })

        tick_doctor.attr({ display : "block"});
        // crud_opt_group_doctor.addClass('animated bounceInUp');
        checked_doctor = true;
    } else if (checked_doctor) {
        crud_opt_group_doctor.attr({
            'display': 'none'
        })
        tick_doctor.attr({ display : "none"});
        // crud_opt_group.removeClass('animated bounceInUp');
        // crud_opt_group.addClass('animated bounceOutUp')
        checked_doctor = false;
    }
};
select_doctor.click(selectCheckBox_doctor);
tick_doctor.click(selectCheckBox_doctor);

//Crud Rect...
var crud_opt_doctor = doctor.rect(0, 0, 80, 90, 5, 5);
crud_opt_doctor.attr({
    x: (select_doctor.node.x.animVal.value + 15),
    y: (select_doctor.node.y.animVal.value + 20),
    fill: "white",
    stroke: "#1f2c39",
    'stroke-dasharray': 10
})

//Crud options inside Crud_opt rect...
var create_doctor = doctor.text(0, 0, "-   create");
create_doctor.attr({
    x: (crud_opt_doctor.node.x.animVal.value + 5),
    y: (crud_opt_doctor.node.y.animVal.value + 20),
    'font-size': 15
});
var listing_doctor = doctor.text(0, 0, "-   Listing");
listing_doctor.attr({
    x: (crud_opt_doctor.node.x.animVal.value + 5),
    y: (crud_opt_doctor.node.y.animVal.value + 40),
    'font-size': 15
});
var update_doctor = doctor.text(0, 0, "-   update");
update_doctor.attr({
    x: (crud_opt_doctor.node.x.animVal.value + 5),
    y: (crud_opt_doctor.node.y.animVal.value + 60),
    'font-size': 15
});
var deleate_doctor = doctor.text(0, 0, "-   delete");
deleate_doctor.attr({
    x: (crud_opt_doctor.node.x.animVal.value + 5),
    y: (crud_opt_doctor.node.y.animVal.value + 80),
    'font-size': 15
});

//check and uncheck Crud options functions...
var createCheckBoxClicked_doctor = false;
var createCheckBoxClick_doctor = function () {
    if (!createCheckBoxClicked_doctor) {
        create_tick_doctor.attr({
            display: "block"
        });
        createCheckBoxClicked_doctor = true;
    } else if (createCheckBoxClicked_doctor) {
        create_tick_doctor.attr({
            display: "none"
        });
        createCheckBoxClicked_doctor = false;
    }
}

//listing check all three remaining options include listing , delete , edit
var listingCheckBoxClicked_doctor = false;
var listingCheckBoxClick_doctor = function () {
    if (!listingCheckBoxClicked_doctor) {
        listing_tick_doctor.attr({
            display: "block"
        });
        update_tick_doctor.attr({
            display: "block"
        });
        deleate_tick_doctor.attr({
            display: "block"
        });
        listingCheckBoxClicked_doctor = true;
    } else if (listingCheckBoxClicked_doctor) {
        listing_tick_doctor.attr({
            display: "none"
        });
        update_tick_doctor.attr({
            display: "none"
        });
        deleate_tick_doctor.attr({
            display: "none"
        });
        listingCheckBoxClicked_doctor = false;
    }
}

//now set checkboxes on front of Crud operations...
var createCheckBox_doctor = doctor.rect(0, 0, 12, 12, 1, 1);
createCheckBox_doctor.attr({
    x: (Number(create_doctor.node.attributes.x.nodeValue) + 60),
    y: (create_doctor.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
createCheckBox_doctor.click(createCheckBoxClick_doctor);
var listingCheckBox_doctor = doctor.rect(0, 0, 12, 12, 1, 1);
listingCheckBox_doctor.attr({
    x: (Number(listing_doctor.node.attributes.x.nodeValue) + 60),
    y: (listing_doctor.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
listingCheckBox_doctor.click(listingCheckBoxClick_doctor);
var updateCheckBox_doctor = doctor.rect(0, 0, 12, 12, 1, 1);
updateCheckBox_doctor.attr({
    x: (Number(update_doctor.node.attributes.x.nodeValue) + 60),
    y: (update_doctor.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
updateCheckBox_doctor.click(listingCheckBoxClick_doctor);
var deleateCheckBox_doctor = doctor.rect(0, 0, 12, 12, 1, 1);
deleateCheckBox_doctor.attr({
    x: (Number(deleate_doctor.node.attributes.x.nodeValue) + 60),
    y: (deleate_doctor.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
deleateCheckBox_doctor.click(listingCheckBoxClick_doctor);

//tick inside create check_box...
var create_tick_path_doctor = "M " + (createCheckBox_doctor.node.x.animVal.value + 1) + " " + (createCheckBox_doctor.node.y.animVal.value + 6) + "L " + (createCheckBox_doctor.node.x.animVal.value + 5) + " " + (createCheckBox_doctor.node.y.animVal.value + 10) + "L " + (createCheckBox_doctor.node.x.animVal.value + createCheckBox_doctor.node.width.animVal.value) + " " + (createCheckBox_doctor.node.y.animVal.value - 2);
var create_tick_doctor = doctor.path(create_tick_path_doctor);
create_tick_doctor.click(createCheckBoxClick_doctor);
create_tick_doctor.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside listing check_box...
var listing_tick_path_doctor = "M " + (listingCheckBox_doctor.node.x.animVal.value + 1) + " " + (listingCheckBox_doctor.node.y.animVal.value + 6) + "L " + (listingCheckBox_doctor.node.x.animVal.value + 5) + " " + (listingCheckBox_doctor.node.y.animVal.value + 10) + "L " + (listingCheckBox_doctor.node.x.animVal.value + listingCheckBox_doctor.node.width.animVal.value) + " " + (listingCheckBox_doctor.node.y.animVal.value - 2);
var listing_tick_doctor = doctor.path(listing_tick_path_doctor);
listing_tick_doctor.click(listingCheckBoxClick_doctor);
listing_tick_doctor.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var update_tick_path_doctor = "M " + (updateCheckBox_doctor.node.x.animVal.value + 1) + " " + (updateCheckBox_doctor.node.y.animVal.value + 6) + "L " + (updateCheckBox_doctor.node.x.animVal.value + 5) + " " + (updateCheckBox_doctor.node.y.animVal.value + 10) + "L " + (updateCheckBox_doctor.node.x.animVal.value + updateCheckBox_doctor.node.width.animVal.value) + " " + (updateCheckBox_doctor.node.y.animVal.value - 2);
var update_tick_doctor = doctor.path(update_tick_path_doctor);
update_tick_doctor.click(listingCheckBoxClick_doctor);
update_tick_doctor.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var deleate_tick_path_doctor = "M " + (deleateCheckBox_doctor.node.x.animVal.value + 1) + " " + (deleateCheckBox_doctor.node.y.animVal.value + 6) + "L " + (deleateCheckBox_doctor.node.x.animVal.value + 5) + " " + (deleateCheckBox_doctor.node.y.animVal.value + 10) + "L " + (deleateCheckBox_doctor.node.x.animVal.value + deleateCheckBox_doctor.node.width.animVal.value) + " " + (deleateCheckBox_doctor.node.y.animVal.value - 2);
var deleate_tick_doctor = doctor.path(deleate_tick_path_doctor);
deleate_tick_doctor.click(listingCheckBoxClick_doctor);
deleate_tick_doctor.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

var crud_opt_group_doctor = doctor.group(crud_opt_doctor, create_doctor, listing_doctor, update_doctor, deleate_doctor, createCheckBox_doctor, listingCheckBox_doctor, updateCheckBox_doctor, deleateCheckBox_doctor, create_tick_doctor, listing_tick_doctor, update_tick_doctor, deleate_tick_doctor);
crud_opt_group_doctor.attr({
    'display': 'none'
})
//relative modals svg...



var patient_hasManyThrough0 = Snap("#doctor");

//modal rectangle...
var drag_title_patient_hasManyThrough0 = Snap.parse('<title>Drag and Drop here related model if exist for generate relation inside form</title>');

var block_patient_hasManyThrough0 = patient_hasManyThrough0.rect(20, 20, 150, 100, 5, 5);
block_patient_hasManyThrough0.attr({
    x: (block_doctor.node.x.animVal.value + block_doctor.node.width.animVal.value + 570),
    width : (block_doctor.node.width.animVal.value),
    fill: "rgb(236, 240, 241)",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray': 5 
});


block_patient_hasManyThrough0.append(drag_title_patient_hasManyThrough0);


//modal text populate inside modal rect...
var text_patient_hasManyThrough0 = patient_hasManyThrough0.text(0, 0, "PATIENT!");
text_patient_hasManyThrough0.attr({
    x: block_patient_hasManyThrough0.node.x.animVal.value + 10,
    y: block_patient_hasManyThrough0.node.y.animVal.value + 20,
    'font-size': 13
});
// line separates modal head and body...
var line_patient_hasManyThrough0 = patient_hasManyThrough0.line(0, 0, 0, 0);
line_patient_hasManyThrough0.attr({
    x1: block_patient_hasManyThrough0.node.x.animVal.value,
    y1: Number(text_patient_hasManyThrough0.node.attributes.y.nodeValue) + 5,
    x2: block_patient_hasManyThrough0.node.x.animVal.value + block_patient_hasManyThrough0.node.width.animVal.value,
    y2: Number(text_patient_hasManyThrough0.node.attributes.y.nodeValue) + 5,
    stroke: "#1f2c39",
    strokeWidth: 1,
    strokeLinecap: "round"
});

// change coordinates of line and mode1_rect according to text
/*<!--block_patient_hasManyThrough0.attr({
    width: Number(text_patient_hasManyThrough0.node.attributes.x.value) + (Number(text_patient_hasManyThrough0.node.textContent.length) * 10 + 30)
});
line_patient_hasManyThrough0.attr({
    x2: (block_patient_hasManyThrough0.node.width.animVal.value + block_patient_hasManyThrough0.node.x.animVal.value)
})-->*/

//tooltip on checkbox...
var select_title_patient_hasManyThrough0 = Snap.parse('<title>Click here to select model for CRUD Operations , if unchecked Crud form are not created</title>');

//select box checked when modal form is created
var select_patient_hasManyThrough0 = patient_hasManyThrough0.rect(0, 0, 15, 15, 2, 2);
select_patient_hasManyThrough0.attr({
    x: (block_patient_hasManyThrough0.node.width.animVal.value + block_patient_hasManyThrough0.node.x.animVal.value - 10),
    y: (block_patient_hasManyThrough0.node.y.animVal.value - 10),
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 2
});
select_patient_hasManyThrough0.append(select_title_patient_hasManyThrough0);

//check symbol inside select box...
var tick_path_patient_hasManyThrough0 = "M " + (select_patient_hasManyThrough0.node.x.animVal.value + 3) + " " + (select_patient_hasManyThrough0.node.y.animVal.value + 5) + "L " + (select_patient_hasManyThrough0.node.x.animVal.value + 7) + " " + (select_patient_hasManyThrough0.node.y.animVal.value + 10) + "L " + (select_patient_hasManyThrough0.node.x.animVal.value + select_patient_hasManyThrough0.node.width.animVal.value) + " " + (select_patient_hasManyThrough0.node.y.animVal.value - 3);
var tick_patient_hasManyThrough0 = patient_hasManyThrough0.path(tick_path_patient_hasManyThrough0)
tick_patient_hasManyThrough0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

//check and uncheck function on checkbox...
var checked_patient_hasManyThrough0 = false;
var selectCheckBox_patient_hasManyThrough0 = function () {
    if (!checked_patient_hasManyThrough0) {
        crud_opt_group_patient_hasManyThrough0.attr({
            'display': 'block'
        })
        tick_patient_hasManyThrough0.attr({ display : "block"});
        block_patient_hasManyThrough0.attr({ x : (block_doctor.node.x.animVal.value + block_doctor.node.width.animVal.value + 570)});
        checked_patient_hasManyThrough0 = true;
    } else if (checked_patient_hasManyThrough0) {
        crud_opt_group_patient_hasManyThrough0.attr({
            'display': 'none'
        })
        tick_patient_hasManyThrough0.attr({ display : "none"});
        checked_patient_hasManyThrough0 = false;
    }
};
select_patient_hasManyThrough0.click(selectCheckBox_patient_hasManyThrough0);
tick_patient_hasManyThrough0.click(selectCheckBox_patient_hasManyThrough0);

//Crud Rect...
var crud_opt_patient_hasManyThrough0 = patient_hasManyThrough0.rect(0, 0, 80, 90, 5, 5);
crud_opt_patient_hasManyThrough0.attr({
    x: (select_patient_hasManyThrough0.node.x.animVal.value + 15),
    y: (select_patient_hasManyThrough0.node.y.animVal.value + 20),
    fill: "white",
    stroke: "#1f2c39",
    'stroke-dasharray': 10
})

//Crud options inside Crud_opt rect...
var create_patient_hasManyThrough0 = patient_hasManyThrough0.text(0, 0, "-   create");
create_patient_hasManyThrough0.attr({
    x: (crud_opt_patient_hasManyThrough0.node.x.animVal.value + 5),
    y: (crud_opt_patient_hasManyThrough0.node.y.animVal.value + 20),
    'font-size': 15
});
var listing_patient_hasManyThrough0 = patient_hasManyThrough0.text(0, 0, "-   Listing");
listing_patient_hasManyThrough0.attr({
    x: (crud_opt_patient_hasManyThrough0.node.x.animVal.value + 5),
    y: (crud_opt_patient_hasManyThrough0.node.y.animVal.value + 40),
    'font-size': 15
});
var update_patient_hasManyThrough0 = patient_hasManyThrough0.text(0, 0, "-   update");
update_patient_hasManyThrough0.attr({
    x: (crud_opt_patient_hasManyThrough0.node.x.animVal.value + 5),
    y: (crud_opt_patient_hasManyThrough0.node.y.animVal.value + 60),
    'font-size': 15
});
var deleate_patient_hasManyThrough0 = patient_hasManyThrough0.text(0, 0, "-   delete");
deleate_patient_hasManyThrough0.attr({
    x: (crud_opt_patient_hasManyThrough0.node.x.animVal.value + 5),
    y: (crud_opt_patient_hasManyThrough0.node.y.animVal.value + 80),
    'font-size': 15
});

//check and uncheck Crud options functions...
var createCheckBoxClicked_patient_hasManyThrough0 = false;
var createCheckBoxClick_patient_hasManyThrough0 = function () {
    if (!createCheckBoxClicked_patient_hasManyThrough0) {
        create_tick_patient_hasManyThrough0.attr({
            display: "block"
        });
        createCheckBoxClicked_patient_hasManyThrough0 = true;
    } else if (createCheckBoxClicked_patient_hasManyThrough0) {
        create_tick_patient_hasManyThrough0.attr({
            display: "none"
        });
        createCheckBoxClicked_patient_hasManyThrough0 = false;
    }
}

//listing check all three remaining options include listing , delete , edit
var listingCheckBoxClicked_patient_hasManyThrough0 = false;
var listingCheckBoxClick_patient_hasManyThrough0 = function () {
    if (!listingCheckBoxClicked_patient_hasManyThrough0) {
        listing_tick_patient_hasManyThrough0.attr({
            display: "block"
        });
        update_tick_patient_hasManyThrough0.attr({
            display: "block"
        });
        deleate_tick_patient_hasManyThrough0.attr({
            display: "block"
        });
        listingCheckBoxClicked_patient_hasManyThrough0 = true;
    } else if (listingCheckBoxClicked_patient_hasManyThrough0) {
        listing_tick_patient_hasManyThrough0.attr({
            display: "none"
        });
        update_tick_patient_hasManyThrough0.attr({
            display: "none"
        });
        deleate_tick_patient_hasManyThrough0.attr({
            display: "none"
        });
        listingCheckBoxClicked_patient_hasManyThrough0 = false;
    }
}

//now set checkboxes on front of Crud operations...
var createCheckBox_patient_hasManyThrough0 = patient_hasManyThrough0.rect(0, 0, 12, 12, 1, 1);
createCheckBox_patient_hasManyThrough0.attr({
    x: (Number(create_patient_hasManyThrough0.node.attributes.x.nodeValue) + 60),
    y: (create_patient_hasManyThrough0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
createCheckBox_patient_hasManyThrough0.click(createCheckBoxClick_patient_hasManyThrough0);
var listingCheckBox_patient_hasManyThrough0 = patient_hasManyThrough0.rect(0, 0, 12, 12, 1, 1);
listingCheckBox_patient_hasManyThrough0.attr({
    x: (Number(listing_patient_hasManyThrough0.node.attributes.x.nodeValue) + 60),
    y: (listing_patient_hasManyThrough0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
listingCheckBox_patient_hasManyThrough0.click(listingCheckBoxClick_patient_hasManyThrough0);
var updateCheckBox_patient_hasManyThrough0 = patient_hasManyThrough0.rect(0, 0, 12, 12, 1, 1);
updateCheckBox_patient_hasManyThrough0.attr({
    x: (Number(update_patient_hasManyThrough0.node.attributes.x.nodeValue) + 60),
    y: (update_patient_hasManyThrough0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
updateCheckBox_patient_hasManyThrough0.click(listingCheckBoxClick_patient_hasManyThrough0);
var deleateCheckBox_patient_hasManyThrough0 = patient_hasManyThrough0.rect(0, 0, 12, 12, 1, 1);
deleateCheckBox_patient_hasManyThrough0.attr({
    x: (Number(deleate_patient_hasManyThrough0.node.attributes.x.nodeValue) + 60),
    y: (deleate_patient_hasManyThrough0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
deleateCheckBox_patient_hasManyThrough0.click(listingCheckBoxClick_patient_hasManyThrough0);

//tick inside create check_box...
var create_tick_path_patient_hasManyThrough0 = "M " + (createCheckBox_patient_hasManyThrough0.node.x.animVal.value + 1) + " " + (createCheckBox_patient_hasManyThrough0.node.y.animVal.value + 6) + "L " + (createCheckBox_patient_hasManyThrough0.node.x.animVal.value + 5) + " " + (createCheckBox_patient_hasManyThrough0.node.y.animVal.value + 10) + "L " + (createCheckBox_patient_hasManyThrough0.node.x.animVal.value + createCheckBox_patient_hasManyThrough0.node.width.animVal.value) + " " + (createCheckBox_patient_hasManyThrough0.node.y.animVal.value - 2);
var create_tick_patient_hasManyThrough0 = patient_hasManyThrough0.path(create_tick_path_patient_hasManyThrough0);
create_tick_patient_hasManyThrough0.click(createCheckBoxClick_patient_hasManyThrough0);
create_tick_patient_hasManyThrough0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside listing check_box...
var listing_tick_path_patient_hasManyThrough0 = "M " + (listingCheckBox_patient_hasManyThrough0.node.x.animVal.value + 1) + " " + (listingCheckBox_patient_hasManyThrough0.node.y.animVal.value + 6) + "L " + (listingCheckBox_patient_hasManyThrough0.node.x.animVal.value + 5) + " " + (listingCheckBox_patient_hasManyThrough0.node.y.animVal.value + 10) + "L " + (listingCheckBox_patient_hasManyThrough0.node.x.animVal.value + listingCheckBox_patient_hasManyThrough0.node.width.animVal.value) + " " + (listingCheckBox_patient_hasManyThrough0.node.y.animVal.value - 2);
var listing_tick_patient_hasManyThrough0 = patient_hasManyThrough0.path(listing_tick_path_patient_hasManyThrough0);
listing_tick_patient_hasManyThrough0.click(listingCheckBoxClick_patient_hasManyThrough0);
listing_tick_patient_hasManyThrough0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var update_tick_path_patient_hasManyThrough0 = "M " + (updateCheckBox_patient_hasManyThrough0.node.x.animVal.value + 1) + " " + (updateCheckBox_patient_hasManyThrough0.node.y.animVal.value + 6) + "L " + (updateCheckBox_patient_hasManyThrough0.node.x.animVal.value + 5) + " " + (updateCheckBox_patient_hasManyThrough0.node.y.animVal.value + 10) + "L " + (updateCheckBox_patient_hasManyThrough0.node.x.animVal.value + updateCheckBox_patient_hasManyThrough0.node.width.animVal.value) + " " + (updateCheckBox_patient_hasManyThrough0.node.y.animVal.value - 2);
var update_tick_patient_hasManyThrough0 = patient_hasManyThrough0.path(update_tick_path_patient_hasManyThrough0);
update_tick_patient_hasManyThrough0.click(listingCheckBoxClick_patient_hasManyThrough0);
update_tick_patient_hasManyThrough0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var deleate_tick_path_patient_hasManyThrough0 = "M " + (deleateCheckBox_patient_hasManyThrough0.node.x.animVal.value + 1) + " " + (deleateCheckBox_patient_hasManyThrough0.node.y.animVal.value + 6) + "L " + (deleateCheckBox_patient_hasManyThrough0.node.x.animVal.value + 5) + " " + (deleateCheckBox_patient_hasManyThrough0.node.y.animVal.value + 10) + "L " + (deleateCheckBox_patient_hasManyThrough0.node.x.animVal.value + deleateCheckBox_patient_hasManyThrough0.node.width.animVal.value) + " " + (deleateCheckBox_patient_hasManyThrough0.node.y.animVal.value - 2);
var deleate_tick_patient_hasManyThrough0 = patient_hasManyThrough0.path(deleate_tick_path_patient_hasManyThrough0);
deleate_tick_patient_hasManyThrough0.click(listingCheckBoxClick_patient_hasManyThrough0);
deleate_tick_patient_hasManyThrough0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

var crud_opt_group_patient_hasManyThrough0 = patient_hasManyThrough0.group(crud_opt_patient_hasManyThrough0, create_patient_hasManyThrough0, listing_patient_hasManyThrough0, update_patient_hasManyThrough0, deleate_patient_hasManyThrough0, createCheckBox_patient_hasManyThrough0, listingCheckBox_patient_hasManyThrough0, updateCheckBox_patient_hasManyThrough0, deleateCheckBox_patient_hasManyThrough0, create_tick_patient_hasManyThrough0, listing_tick_patient_hasManyThrough0, update_tick_patient_hasManyThrough0, deleate_tick_patient_hasManyThrough0);
crud_opt_group_patient_hasManyThrough0.attr({
    'display': 'none'
})

//now linked model in hasManyThrough relation
var appiontment_hasManyThrough0doctor = Snap("#doctor");

//modal rectangle...
var drag_title_appiontment_hasManyThrough0doctor = Snap.parse('<title>Drag and Drop here related model if exist for generate relation inside form</title>');

var block_appiontment_hasManyThrough0doctor = appiontment_hasManyThrough0doctor.rect(20, 20, 150, 100, 5, 5);
block_appiontment_hasManyThrough0doctor.attr({
    x: (block_doctor.node.x.animVal.value + block_doctor.node.width.animVal.value + 200),
    width : (block_doctor.node.width.animVal.value),
    fill: "rgb(236, 240, 241)",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray': 5 
});


block_appiontment_hasManyThrough0doctor.append(drag_title_appiontment_hasManyThrough0doctor);


//modal text populate inside modal rect...
var text_appiontment_hasManyThrough0doctor = appiontment_hasManyThrough0doctor.text(0, 0, "APPIONTMENT!");
text_appiontment_hasManyThrough0doctor.attr({
    x: block_appiontment_hasManyThrough0doctor.node.x.animVal.value + 10,
    y: block_appiontment_hasManyThrough0doctor.node.y.animVal.value + 20,
    'font-size': 13
});
// line separates modal head and body...
var line_appiontment_hasManyThrough0doctor = appiontment_hasManyThrough0doctor.line(0, 0, 0, 0);
line_appiontment_hasManyThrough0doctor.attr({
    x1: block_appiontment_hasManyThrough0doctor.node.x.animVal.value,
    y1: Number(text_appiontment_hasManyThrough0doctor.node.attributes.y.nodeValue) + 5,
    x2: block_appiontment_hasManyThrough0doctor.node.x.animVal.value + block_appiontment_hasManyThrough0doctor.node.width.animVal.value,
    y2: Number(text_appiontment_hasManyThrough0doctor.node.attributes.y.nodeValue) + 5,
    stroke: "#1f2c39",
    strokeWidth: 1,
    strokeLinecap: "round"
});


//line which attach 2nd model to linked model
var PatientToappiontmentPath  = "M " +(block_patient_hasManyThrough0.node.x.animVal.value) + " " + (block_patient_hasManyThrough0.node.y.animVal.value + 50) + "H " + (block_appiontment_hasManyThrough0doctor.node.x.animVal.value + block_appiontment_hasManyThrough0doctor.node.width.animVal.value);

var PatientToappiontment = doctor.path(PatientToappiontmentPath);
PatientToappiontment.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1
})
//polygon {Arrow at end of line toward linkedmodel from 2nd model
var PatientToappiontmentArrowPoints = [(block_appiontment_hasManyThrough0doctor.node.x.animVal.value + block_appiontment_hasManyThrough0doctor.node.width.animVal.value) , (block_appiontment_hasManyThrough0doctor.node.y.animVal.value + 50) , (block_appiontment_hasManyThrough0doctor.node.x.animVal.value + block_appiontment_hasManyThrough0doctor.node.width.animVal.value + 10) , (block_appiontment_hasManyThrough0doctor.node.y.animVal.value +50 -10) , (block_appiontment_hasManyThrough0doctor.node.x.animVal.value + block_appiontment_hasManyThrough0doctor.node.width.animVal.value + 10) , (block_appiontment_hasManyThrough0doctor.node.y.animVal.value + 50 + 10) ];
var PatientToappiontmentArrow = doctor.polygon(PatientToappiontmentArrowPoints);
PatientToappiontmentArrow.attr({
    fill: "#1f2c39",
    stroke: "#1f2c39",
    strokeWidth: 1,
});


// change coordinates of line and mode1_rect according to text
/*<!--block_appiontment_hasManyThrough0doctor.attr({
    width: Number(text_appiontment_hasManyThrough0doctor.node.attributes.x.value) + (Number(text_appiontment_hasManyThrough0doctor.node.textContent.length) * 10 + 30)
});
line_appiontment_hasManyThrough0doctor.attr({
    x2: (block_appiontment_hasManyThrough0doctor.node.width.animVal.value + block_appiontment_hasManyThrough0doctor.node.x.animVal.value)
})-->*/

//tooltip on checkbox...
var select_title_appiontment_hasManyThrough0doctor = Snap.parse('<title>Click here to select model for CRUD Operations , if unchecked Crud form are not created</title>');

//select box checked when modal form is created
var select_appiontment_hasManyThrough0doctor = appiontment_hasManyThrough0doctor.rect(0, 0, 15, 15, 2, 2);
select_appiontment_hasManyThrough0doctor.attr({
    x: (block_appiontment_hasManyThrough0doctor.node.width.animVal.value + block_appiontment_hasManyThrough0doctor.node.x.animVal.value - 10),
    y: (block_appiontment_hasManyThrough0doctor.node.y.animVal.value - 10),
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 2
});
select_appiontment_hasManyThrough0doctor.append(select_title_appiontment_hasManyThrough0doctor);

//check symbol inside select box...
var tick_path_appiontment_hasManyThrough0doctor = "M " + (select_appiontment_hasManyThrough0doctor.node.x.animVal.value + 3) + " " + (select_appiontment_hasManyThrough0doctor.node.y.animVal.value + 5) + "L " + (select_appiontment_hasManyThrough0doctor.node.x.animVal.value + 7) + " " + (select_appiontment_hasManyThrough0doctor.node.y.animVal.value + 10) + "L " + (select_appiontment_hasManyThrough0doctor.node.x.animVal.value + select_appiontment_hasManyThrough0doctor.node.width.animVal.value) + " " + (select_appiontment_hasManyThrough0doctor.node.y.animVal.value - 3);
var tick_appiontment_hasManyThrough0doctor = appiontment_hasManyThrough0doctor.path(tick_path_appiontment_hasManyThrough0doctor)
tick_appiontment_hasManyThrough0doctor.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

//check and uncheck function on checkbox...
var checked_appiontment_hasManyThrough0doctor = false;
var selectCheckBox_appiontment_hasManyThrough0doctor = function () {
    if (!checked_appiontment_hasManyThrough0doctor) {
        crud_opt_group_appiontment_hasManyThrough0doctor.attr({
            'display': 'block'
        })
        tick_appiontment_hasManyThrough0doctor.attr({ display : "block"});
        block_appiontment_hasManyThrough0doctor.attr({ x : (block_doctor.node.x.animVal.value + block_doctor.node.width.animVal.value + 200)});
        checked_appiontment_hasManyThrough0doctor = true;
    } else if (checked_appiontment_hasManyThrough0doctor) {
        crud_opt_group_appiontment_hasManyThrough0doctor.attr({
            'display': 'none'
        })
        tick_appiontment_hasManyThrough0doctor.attr({ display : "none"});
        checked_appiontment_hasManyThrough0doctor = false;
    }
};
select_appiontment_hasManyThrough0doctor.click(selectCheckBox_appiontment_hasManyThrough0doctor);
tick_appiontment_hasManyThrough0doctor.click(selectCheckBox_appiontment_hasManyThrough0doctor);

//Crud Rect...
var crud_opt_appiontment_hasManyThrough0doctor = appiontment_hasManyThrough0doctor.rect(0, 0, 80, 90, 5, 5);
crud_opt_appiontment_hasManyThrough0doctor.attr({
    x: (select_appiontment_hasManyThrough0doctor.node.x.animVal.value + 15),
    y: (select_appiontment_hasManyThrough0doctor.node.y.animVal.value + 20),
    fill: "white",
    stroke: "#1f2c39",
    'stroke-dasharray': 10
})

//Crud options inside Crud_opt rect...
var create_appiontment_hasManyThrough0doctor = appiontment_hasManyThrough0doctor.text(0, 0, "-   create");
create_appiontment_hasManyThrough0doctor.attr({
    x: (crud_opt_appiontment_hasManyThrough0doctor.node.x.animVal.value + 5),
    y: (crud_opt_appiontment_hasManyThrough0doctor.node.y.animVal.value + 20),
    'font-size': 15
});
var listing_appiontment_hasManyThrough0doctor = appiontment_hasManyThrough0doctor.text(0, 0, "-   Listing");
listing_appiontment_hasManyThrough0doctor.attr({
    x: (crud_opt_appiontment_hasManyThrough0doctor.node.x.animVal.value + 5),
    y: (crud_opt_appiontment_hasManyThrough0doctor.node.y.animVal.value + 40),
    'font-size': 15
});
var update_appiontment_hasManyThrough0doctor = appiontment_hasManyThrough0doctor.text(0, 0, "-   update");
update_appiontment_hasManyThrough0doctor.attr({
    x: (crud_opt_appiontment_hasManyThrough0doctor.node.x.animVal.value + 5),
    y: (crud_opt_appiontment_hasManyThrough0doctor.node.y.animVal.value + 60),
    'font-size': 15
});
var deleate_appiontment_hasManyThrough0doctor = appiontment_hasManyThrough0doctor.text(0, 0, "-   delete");
deleate_appiontment_hasManyThrough0doctor.attr({
    x: (crud_opt_appiontment_hasManyThrough0doctor.node.x.animVal.value + 5),
    y: (crud_opt_appiontment_hasManyThrough0doctor.node.y.animVal.value + 80),
    'font-size': 15
});

//check and uncheck Crud options functions...
var createCheckBoxClicked_appiontment_hasManyThrough0doctor = false;
var createCheckBoxClick_appiontment_hasManyThrough0doctor = function () {
    if (!createCheckBoxClicked_appiontment_hasManyThrough0doctor) {
        create_tick_appiontment_hasManyThrough0doctor.attr({
            display: "block"
        });
        createCheckBoxClicked_appiontment_hasManyThrough0doctor = true;
    } else if (createCheckBoxClicked_appiontment_hasManyThrough0doctor) {
        create_tick_appiontment_hasManyThrough0doctor.attr({
            display: "none"
        });
        createCheckBoxClicked_appiontment_hasManyThrough0doctor = false;
    }
}

//listing check all three remaining options include listing , delete , edit
var listingCheckBoxClicked_appiontment_hasManyThrough0doctor = false;
var listingCheckBoxClick_appiontment_hasManyThrough0doctor = function () {
    if (!listingCheckBoxClicked_appiontment_hasManyThrough0doctor) {
        listing_tick_appiontment_hasManyThrough0doctor.attr({
            display: "block"
        });
        update_tick_appiontment_hasManyThrough0doctor.attr({
            display: "block"
        });
        deleate_tick_appiontment_hasManyThrough0doctor.attr({
            display: "block"
        });
        listingCheckBoxClicked_appiontment_hasManyThrough0doctor = true;
    } else if (listingCheckBoxClicked_appiontment_hasManyThrough0doctor) {
        listing_tick_appiontment_hasManyThrough0doctor.attr({
            display: "none"
        });
        update_tick_appiontment_hasManyThrough0doctor.attr({
            display: "none"
        });
        deleate_tick_appiontment_hasManyThrough0doctor.attr({
            display: "none"
        });
        listingCheckBoxClicked_appiontment_hasManyThrough0doctor = false;
    }
}

//now set checkboxes on front of Crud operations...
var createCheckBox_appiontment_hasManyThrough0doctor = appiontment_hasManyThrough0doctor.rect(0, 0, 12, 12, 1, 1);
createCheckBox_appiontment_hasManyThrough0doctor.attr({
    x: (Number(create_appiontment_hasManyThrough0doctor.node.attributes.x.nodeValue) + 60),
    y: (create_appiontment_hasManyThrough0doctor.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
createCheckBox_appiontment_hasManyThrough0doctor.click(createCheckBoxClick_appiontment_hasManyThrough0doctor);
var listingCheckBox_appiontment_hasManyThrough0doctor = appiontment_hasManyThrough0doctor.rect(0, 0, 12, 12, 1, 1);
listingCheckBox_appiontment_hasManyThrough0doctor.attr({
    x: (Number(listing_appiontment_hasManyThrough0doctor.node.attributes.x.nodeValue) + 60),
    y: (listing_appiontment_hasManyThrough0doctor.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
listingCheckBox_appiontment_hasManyThrough0doctor.click(listingCheckBoxClick_appiontment_hasManyThrough0doctor);
var updateCheckBox_appiontment_hasManyThrough0doctor = appiontment_hasManyThrough0doctor.rect(0, 0, 12, 12, 1, 1);
updateCheckBox_appiontment_hasManyThrough0doctor.attr({
    x: (Number(update_appiontment_hasManyThrough0doctor.node.attributes.x.nodeValue) + 60),
    y: (update_appiontment_hasManyThrough0doctor.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
updateCheckBox_appiontment_hasManyThrough0doctor.click(listingCheckBoxClick_appiontment_hasManyThrough0doctor);
var deleateCheckBox_appiontment_hasManyThrough0doctor = appiontment_hasManyThrough0doctor.rect(0, 0, 12, 12, 1, 1);
deleateCheckBox_appiontment_hasManyThrough0doctor.attr({
    x: (Number(deleate_appiontment_hasManyThrough0doctor.node.attributes.x.nodeValue) + 60),
    y: (deleate_appiontment_hasManyThrough0doctor.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
deleateCheckBox_appiontment_hasManyThrough0doctor.click(listingCheckBoxClick_appiontment_hasManyThrough0doctor);

//tick inside create check_box...
var create_tick_path_appiontment_hasManyThrough0doctor = "M " + (createCheckBox_appiontment_hasManyThrough0doctor.node.x.animVal.value + 1) + " " + (createCheckBox_appiontment_hasManyThrough0doctor.node.y.animVal.value + 6) + "L " + (createCheckBox_appiontment_hasManyThrough0doctor.node.x.animVal.value + 5) + " " + (createCheckBox_appiontment_hasManyThrough0doctor.node.y.animVal.value + 10) + "L " + (createCheckBox_appiontment_hasManyThrough0doctor.node.x.animVal.value + createCheckBox_appiontment_hasManyThrough0doctor.node.width.animVal.value) + " " + (createCheckBox_appiontment_hasManyThrough0doctor.node.y.animVal.value - 2);
var create_tick_appiontment_hasManyThrough0doctor = appiontment_hasManyThrough0doctor.path(create_tick_path_appiontment_hasManyThrough0doctor);
create_tick_appiontment_hasManyThrough0doctor.click(createCheckBoxClick_appiontment_hasManyThrough0doctor);
create_tick_appiontment_hasManyThrough0doctor.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside listing check_box...
var listing_tick_path_appiontment_hasManyThrough0doctor = "M " + (listingCheckBox_appiontment_hasManyThrough0doctor.node.x.animVal.value + 1) + " " + (listingCheckBox_appiontment_hasManyThrough0doctor.node.y.animVal.value + 6) + "L " + (listingCheckBox_appiontment_hasManyThrough0doctor.node.x.animVal.value + 5) + " " + (listingCheckBox_appiontment_hasManyThrough0doctor.node.y.animVal.value + 10) + "L " + (listingCheckBox_appiontment_hasManyThrough0doctor.node.x.animVal.value + listingCheckBox_appiontment_hasManyThrough0doctor.node.width.animVal.value) + " " + (listingCheckBox_appiontment_hasManyThrough0doctor.node.y.animVal.value - 2);
var listing_tick_appiontment_hasManyThrough0doctor = appiontment_hasManyThrough0doctor.path(listing_tick_path_appiontment_hasManyThrough0doctor);
listing_tick_appiontment_hasManyThrough0doctor.click(listingCheckBoxClick_appiontment_hasManyThrough0doctor);
listing_tick_appiontment_hasManyThrough0doctor.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var update_tick_path_appiontment_hasManyThrough0doctor = "M " + (updateCheckBox_appiontment_hasManyThrough0doctor.node.x.animVal.value + 1) + " " + (updateCheckBox_appiontment_hasManyThrough0doctor.node.y.animVal.value + 6) + "L " + (updateCheckBox_appiontment_hasManyThrough0doctor.node.x.animVal.value + 5) + " " + (updateCheckBox_appiontment_hasManyThrough0doctor.node.y.animVal.value + 10) + "L " + (updateCheckBox_appiontment_hasManyThrough0doctor.node.x.animVal.value + updateCheckBox_appiontment_hasManyThrough0doctor.node.width.animVal.value) + " " + (updateCheckBox_appiontment_hasManyThrough0doctor.node.y.animVal.value - 2);
var update_tick_appiontment_hasManyThrough0doctor = appiontment_hasManyThrough0doctor.path(update_tick_path_appiontment_hasManyThrough0doctor);
update_tick_appiontment_hasManyThrough0doctor.click(listingCheckBoxClick_appiontment_hasManyThrough0doctor);
update_tick_appiontment_hasManyThrough0doctor.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var deleate_tick_path_appiontment_hasManyThrough0doctor = "M " + (deleateCheckBox_appiontment_hasManyThrough0doctor.node.x.animVal.value + 1) + " " + (deleateCheckBox_appiontment_hasManyThrough0doctor.node.y.animVal.value + 6) + "L " + (deleateCheckBox_appiontment_hasManyThrough0doctor.node.x.animVal.value + 5) + " " + (deleateCheckBox_appiontment_hasManyThrough0doctor.node.y.animVal.value + 10) + "L " + (deleateCheckBox_appiontment_hasManyThrough0doctor.node.x.animVal.value + deleateCheckBox_appiontment_hasManyThrough0doctor.node.width.animVal.value) + " " + (deleateCheckBox_appiontment_hasManyThrough0doctor.node.y.animVal.value - 2);
var deleate_tick_appiontment_hasManyThrough0doctor = appiontment_hasManyThrough0doctor.path(deleate_tick_path_appiontment_hasManyThrough0doctor);
deleate_tick_appiontment_hasManyThrough0doctor.click(listingCheckBoxClick_appiontment_hasManyThrough0doctor);
deleate_tick_appiontment_hasManyThrough0doctor.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

var crud_opt_group_appiontment_hasManyThrough0doctor = appiontment_hasManyThrough0doctor.group(crud_opt_appiontment_hasManyThrough0doctor, create_appiontment_hasManyThrough0doctor, listing_appiontment_hasManyThrough0doctor, update_appiontment_hasManyThrough0doctor, deleate_appiontment_hasManyThrough0doctor, createCheckBox_appiontment_hasManyThrough0doctor, listingCheckBox_appiontment_hasManyThrough0doctor, updateCheckBox_appiontment_hasManyThrough0doctor, deleateCheckBox_appiontment_hasManyThrough0doctor, create_tick_appiontment_hasManyThrough0doctor, listing_tick_appiontment_hasManyThrough0doctor, update_tick_appiontment_hasManyThrough0doctor, deleate_tick_appiontment_hasManyThrough0doctor);
crud_opt_group_appiontment_hasManyThrough0doctor.attr({
    'display': 'none'
})

//line extend line from current model and attach to related model in hasManyThrough relation...
var doctorToPatientPath = "M " + (block_appiontment_hasManyThrough0doctor.node.x.animVal.value + block_appiontment_hasManyThrough0doctor.node.width.animVal.value + 100) + " " + (block_appiontment_hasManyThrough0doctor.node.y.animVal.value + 60) + "V " + (block_patient_hasManyThrough0.node.y.animVal.value + 60) + "H " + (block_patient_hasManyThrough0.node.x.animVal.value);
var doctorToPatient = doctor.path(doctorToPatientPath);
doctorToPatient.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray' : 5
})

//line toward linked model from current model

var doctorToappiontmentPath = "M " + (block_doctor.node.x.animVal.value + block_doctor.node.width.animVal.value + 100) + " " + (block_doctor.node.y.animVal.value + 50) + "V " +  (block_appiontment_hasManyThrough0doctor.node.y.animVal.value + 50) + "H " +  (block_appiontment_hasManyThrough0doctor.node.x.animVal.value); 


var doctorToappiontment = doctor.path(doctorToappiontmentPath);
doctorToappiontment.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1
})
//polygon {Arrow at end of line toward linkedmodel}
var doctorToappiontmentArrowPoints = [block_appiontment_hasManyThrough0doctor.node.x.animVal.value,(block_appiontment_hasManyThrough0doctor.node.y.animVal.value+50),(block_appiontment_hasManyThrough0doctor.node.x.animVal.value-10),(block_appiontment_hasManyThrough0doctor.node.y.animVal.value+50-10),(block_appiontment_hasManyThrough0doctor.node.x.animVal.value-10),(block_appiontment_hasManyThrough0doctor.node.y.animVal.value+50+10)];
var doctorToappiontmentArrow = doctor.polygon(doctorToappiontmentArrowPoints);
doctorToappiontmentArrow.attr({
    fill: "#1f2c39",
    stroke: "#1f2c39",
    strokeWidth: 1,
});


//get access to id
var email = Snap("#email");

//modal rectangle...
var drag_title_email = Snap.parse('<title>Drag and Drop here related model if exist for generate relation inside form</title>');

var block_email = email.rect(20, 20, 150, 100, 5, 5);
block_email.attr({
    fill: "rgb(236, 240, 241)",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray': 5
});
block_email.append(drag_title_email);

//modal text populate inside modal rect...
var text_email = email.text(0, 0, "EMAIL!");
text_email.attr({
    x: block_email.node.x.animVal.value + 10,
    y: block_email.node.y.animVal.value + 20,
    'font-size': 13
});
// line separates modal head and body...
var line_email = email.line(0, 0, 0, 0);
line_email.attr({
    x1: block_email.node.x.animVal.value,
    y1: Number(text_email.node.attributes.y.nodeValue) + 5,
    x2: block_email.node.x.animVal.value + block_email.node.width.animVal.value,
    y2: Number(text_email.node.attributes.y.nodeValue) + 5,
    stroke: "#1f2c39",
    strokeWidth: 1,
    strokeLinecap: "round"
});

// change coordinates of line and mode1_rect according to text
/*block_email.attr({
    width: Number(text_email.node.attributes.x.value) + (Number(text_email.node.textContent.length) * 10 + 30)
});
line_email.attr({
    x2: (block_email.node.width.animVal.value + block_email.node.x.animVal.value)
})*/

//tooltip on checkbox...
var select_title_email = Snap.parse('<title>Click here to select model for CRUD Operations , if unchecked Crud form are not created</title>');

//select box checked when modal form is created
var select_email = email.rect(0, 0, 15, 15, 2, 2);
select_email.attr({
    x: (block_email.node.width.animVal.value + block_email.node.x.animVal.value - 10),
    y: (block_email.node.y.animVal.value - 10),
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 2
});
select_email.append(select_title_email);

//check symbol inside select box...
var tick_path_email = "M " + (select_email.node.x.animVal.value + 3) + " " + (select_email.node.y.animVal.value + 5) + "L " + (select_email.node.x.animVal.value + 7) + " " + (select_email.node.y.animVal.value + 10) + "L " + (select_email.node.x.animVal.value + select_email.node.width.animVal.value) + " " + (select_email.node.y.animVal.value - 3);
var tick_email = email.path(tick_path_email)
tick_email.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

//check and uncheck function on checkbox...
var checked_email = false;
var selectCheckBox_email = function () {
    if (!checked_email) {
        //  crud_opt_group.removeClass('animated bounceOutUp')
        crud_opt_group_email.attr({
            'display': 'block'
        })

        tick_email.attr({ display : "block"});
        // crud_opt_group_email.addClass('animated bounceInUp');
        checked_email = true;
    } else if (checked_email) {
        crud_opt_group_email.attr({
            'display': 'none'
        })
        tick_email.attr({ display : "none"});
        // crud_opt_group.removeClass('animated bounceInUp');
        // crud_opt_group.addClass('animated bounceOutUp')
        checked_email = false;
    }
};
select_email.click(selectCheckBox_email);
tick_email.click(selectCheckBox_email);

//Crud Rect...
var crud_opt_email = email.rect(0, 0, 80, 90, 5, 5);
crud_opt_email.attr({
    x: (select_email.node.x.animVal.value + 15),
    y: (select_email.node.y.animVal.value + 20),
    fill: "white",
    stroke: "#1f2c39",
    'stroke-dasharray': 10
})

//Crud options inside Crud_opt rect...
var create_email = email.text(0, 0, "-   create");
create_email.attr({
    x: (crud_opt_email.node.x.animVal.value + 5),
    y: (crud_opt_email.node.y.animVal.value + 20),
    'font-size': 15
});
var listing_email = email.text(0, 0, "-   Listing");
listing_email.attr({
    x: (crud_opt_email.node.x.animVal.value + 5),
    y: (crud_opt_email.node.y.animVal.value + 40),
    'font-size': 15
});
var update_email = email.text(0, 0, "-   update");
update_email.attr({
    x: (crud_opt_email.node.x.animVal.value + 5),
    y: (crud_opt_email.node.y.animVal.value + 60),
    'font-size': 15
});
var deleate_email = email.text(0, 0, "-   delete");
deleate_email.attr({
    x: (crud_opt_email.node.x.animVal.value + 5),
    y: (crud_opt_email.node.y.animVal.value + 80),
    'font-size': 15
});

//check and uncheck Crud options functions...
var createCheckBoxClicked_email = false;
var createCheckBoxClick_email = function () {
    if (!createCheckBoxClicked_email) {
        create_tick_email.attr({
            display: "block"
        });
        createCheckBoxClicked_email = true;
    } else if (createCheckBoxClicked_email) {
        create_tick_email.attr({
            display: "none"
        });
        createCheckBoxClicked_email = false;
    }
}

//listing check all three remaining options include listing , delete , edit
var listingCheckBoxClicked_email = false;
var listingCheckBoxClick_email = function () {
    if (!listingCheckBoxClicked_email) {
        listing_tick_email.attr({
            display: "block"
        });
        update_tick_email.attr({
            display: "block"
        });
        deleate_tick_email.attr({
            display: "block"
        });
        listingCheckBoxClicked_email = true;
    } else if (listingCheckBoxClicked_email) {
        listing_tick_email.attr({
            display: "none"
        });
        update_tick_email.attr({
            display: "none"
        });
        deleate_tick_email.attr({
            display: "none"
        });
        listingCheckBoxClicked_email = false;
    }
}

//now set checkboxes on front of Crud operations...
var createCheckBox_email = email.rect(0, 0, 12, 12, 1, 1);
createCheckBox_email.attr({
    x: (Number(create_email.node.attributes.x.nodeValue) + 60),
    y: (create_email.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
createCheckBox_email.click(createCheckBoxClick_email);
var listingCheckBox_email = email.rect(0, 0, 12, 12, 1, 1);
listingCheckBox_email.attr({
    x: (Number(listing_email.node.attributes.x.nodeValue) + 60),
    y: (listing_email.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
listingCheckBox_email.click(listingCheckBoxClick_email);
var updateCheckBox_email = email.rect(0, 0, 12, 12, 1, 1);
updateCheckBox_email.attr({
    x: (Number(update_email.node.attributes.x.nodeValue) + 60),
    y: (update_email.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
updateCheckBox_email.click(listingCheckBoxClick_email);
var deleateCheckBox_email = email.rect(0, 0, 12, 12, 1, 1);
deleateCheckBox_email.attr({
    x: (Number(deleate_email.node.attributes.x.nodeValue) + 60),
    y: (deleate_email.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
deleateCheckBox_email.click(listingCheckBoxClick_email);

//tick inside create check_box...
var create_tick_path_email = "M " + (createCheckBox_email.node.x.animVal.value + 1) + " " + (createCheckBox_email.node.y.animVal.value + 6) + "L " + (createCheckBox_email.node.x.animVal.value + 5) + " " + (createCheckBox_email.node.y.animVal.value + 10) + "L " + (createCheckBox_email.node.x.animVal.value + createCheckBox_email.node.width.animVal.value) + " " + (createCheckBox_email.node.y.animVal.value - 2);
var create_tick_email = email.path(create_tick_path_email);
create_tick_email.click(createCheckBoxClick_email);
create_tick_email.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside listing check_box...
var listing_tick_path_email = "M " + (listingCheckBox_email.node.x.animVal.value + 1) + " " + (listingCheckBox_email.node.y.animVal.value + 6) + "L " + (listingCheckBox_email.node.x.animVal.value + 5) + " " + (listingCheckBox_email.node.y.animVal.value + 10) + "L " + (listingCheckBox_email.node.x.animVal.value + listingCheckBox_email.node.width.animVal.value) + " " + (listingCheckBox_email.node.y.animVal.value - 2);
var listing_tick_email = email.path(listing_tick_path_email);
listing_tick_email.click(listingCheckBoxClick_email);
listing_tick_email.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var update_tick_path_email = "M " + (updateCheckBox_email.node.x.animVal.value + 1) + " " + (updateCheckBox_email.node.y.animVal.value + 6) + "L " + (updateCheckBox_email.node.x.animVal.value + 5) + " " + (updateCheckBox_email.node.y.animVal.value + 10) + "L " + (updateCheckBox_email.node.x.animVal.value + updateCheckBox_email.node.width.animVal.value) + " " + (updateCheckBox_email.node.y.animVal.value - 2);
var update_tick_email = email.path(update_tick_path_email);
update_tick_email.click(listingCheckBoxClick_email);
update_tick_email.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var deleate_tick_path_email = "M " + (deleateCheckBox_email.node.x.animVal.value + 1) + " " + (deleateCheckBox_email.node.y.animVal.value + 6) + "L " + (deleateCheckBox_email.node.x.animVal.value + 5) + " " + (deleateCheckBox_email.node.y.animVal.value + 10) + "L " + (deleateCheckBox_email.node.x.animVal.value + deleateCheckBox_email.node.width.animVal.value) + " " + (deleateCheckBox_email.node.y.animVal.value - 2);
var deleate_tick_email = email.path(deleate_tick_path_email);
deleate_tick_email.click(listingCheckBoxClick_email);
deleate_tick_email.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

var crud_opt_group_email = email.group(crud_opt_email, create_email, listing_email, update_email, deleate_email, createCheckBox_email, listingCheckBox_email, updateCheckBox_email, deleateCheckBox_email, create_tick_email, listing_tick_email, update_tick_email, deleate_tick_email);
crud_opt_group_email.attr({
    'display': 'none'
})
//relative modals svg...

//get access to id
var model1 = Snap("#model1");

//modal rectangle...
var drag_title_model1 = Snap.parse('<title>Drag and Drop here related model if exist for generate relation inside form</title>');

var block_model1 = model1.rect(20, 20, 150, 100, 5, 5);
block_model1.attr({
    fill: "rgb(236, 240, 241)",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray': 5
});
block_model1.append(drag_title_model1);

var model1_rel_path = "M " + (block_model1.node.x.animVal.value + block_model1.node.width.animVal.value ) + " " + (block_model1.node.y.animVal.value + 50) + "H " + (block_model1.node.x.animVal.value + block_model1.node.width.animVal.value + 100);
var model1_rel_path_half = model1.path(model1_rel_path);
model1_rel_path_half.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1
});

    var model1_rel_path_linkModel = "M " + (block_model1.node.x.animVal.value + block_model1.node.width.animVal.value ) + " " + (block_model1.node.y.animVal.value + 60) + "H " + (block_model1.node.x.animVal.value + block_model1.node.width.animVal.value + 450);        
    var model1_rel_path_half_LinkModel = model1.path(model1_rel_path_linkModel);
    model1_rel_path_half_LinkModel.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray' : 5
});


//modal text populate inside modal rect...
var text_model1 = model1.text(0, 0, "MODEL1!");
text_model1.attr({
    x: block_model1.node.x.animVal.value + 10,
    y: block_model1.node.y.animVal.value + 20,
    'font-size': 13
});
// line separates modal head and body...
var line_model1 = model1.line(0, 0, 0, 0);
line_model1.attr({
    x1: block_model1.node.x.animVal.value,
    y1: Number(text_model1.node.attributes.y.nodeValue) + 5,
    x2: block_model1.node.x.animVal.value + block_model1.node.width.animVal.value,
    y2: Number(text_model1.node.attributes.y.nodeValue) + 5,
    stroke: "#1f2c39",
    strokeWidth: 1,
    strokeLinecap: "round"
});

// change coordinates of line and mode1_rect according to text
/*block_model1.attr({
    width: Number(text_model1.node.attributes.x.value) + (Number(text_model1.node.textContent.length) * 10 + 30)
});
line_model1.attr({
    x2: (block_model1.node.width.animVal.value + block_model1.node.x.animVal.value)
})*/

//tooltip on checkbox...
var select_title_model1 = Snap.parse('<title>Click here to select model for CRUD Operations , if unchecked Crud form are not created</title>');

//select box checked when modal form is created
var select_model1 = model1.rect(0, 0, 15, 15, 2, 2);
select_model1.attr({
    x: (block_model1.node.width.animVal.value + block_model1.node.x.animVal.value - 10),
    y: (block_model1.node.y.animVal.value - 10),
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 2
});
select_model1.append(select_title_model1);

//check symbol inside select box...
var tick_path_model1 = "M " + (select_model1.node.x.animVal.value + 3) + " " + (select_model1.node.y.animVal.value + 5) + "L " + (select_model1.node.x.animVal.value + 7) + " " + (select_model1.node.y.animVal.value + 10) + "L " + (select_model1.node.x.animVal.value + select_model1.node.width.animVal.value) + " " + (select_model1.node.y.animVal.value - 3);
var tick_model1 = model1.path(tick_path_model1)
tick_model1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

//check and uncheck function on checkbox...
var checked_model1 = false;
var selectCheckBox_model1 = function () {
    if (!checked_model1) {
        //  crud_opt_group.removeClass('animated bounceOutUp')
        crud_opt_group_model1.attr({
            'display': 'block'
        })

        tick_model1.attr({ display : "block"});
        // crud_opt_group_model1.addClass('animated bounceInUp');
        checked_model1 = true;
    } else if (checked_model1) {
        crud_opt_group_model1.attr({
            'display': 'none'
        })
        tick_model1.attr({ display : "none"});
        // crud_opt_group.removeClass('animated bounceInUp');
        // crud_opt_group.addClass('animated bounceOutUp')
        checked_model1 = false;
    }
};
select_model1.click(selectCheckBox_model1);
tick_model1.click(selectCheckBox_model1);

//Crud Rect...
var crud_opt_model1 = model1.rect(0, 0, 80, 90, 5, 5);
crud_opt_model1.attr({
    x: (select_model1.node.x.animVal.value + 15),
    y: (select_model1.node.y.animVal.value + 20),
    fill: "white",
    stroke: "#1f2c39",
    'stroke-dasharray': 10
})

//Crud options inside Crud_opt rect...
var create_model1 = model1.text(0, 0, "-   create");
create_model1.attr({
    x: (crud_opt_model1.node.x.animVal.value + 5),
    y: (crud_opt_model1.node.y.animVal.value + 20),
    'font-size': 15
});
var listing_model1 = model1.text(0, 0, "-   Listing");
listing_model1.attr({
    x: (crud_opt_model1.node.x.animVal.value + 5),
    y: (crud_opt_model1.node.y.animVal.value + 40),
    'font-size': 15
});
var update_model1 = model1.text(0, 0, "-   update");
update_model1.attr({
    x: (crud_opt_model1.node.x.animVal.value + 5),
    y: (crud_opt_model1.node.y.animVal.value + 60),
    'font-size': 15
});
var deleate_model1 = model1.text(0, 0, "-   delete");
deleate_model1.attr({
    x: (crud_opt_model1.node.x.animVal.value + 5),
    y: (crud_opt_model1.node.y.animVal.value + 80),
    'font-size': 15
});

//check and uncheck Crud options functions...
var createCheckBoxClicked_model1 = false;
var createCheckBoxClick_model1 = function () {
    if (!createCheckBoxClicked_model1) {
        create_tick_model1.attr({
            display: "block"
        });
        createCheckBoxClicked_model1 = true;
    } else if (createCheckBoxClicked_model1) {
        create_tick_model1.attr({
            display: "none"
        });
        createCheckBoxClicked_model1 = false;
    }
}

//listing check all three remaining options include listing , delete , edit
var listingCheckBoxClicked_model1 = false;
var listingCheckBoxClick_model1 = function () {
    if (!listingCheckBoxClicked_model1) {
        listing_tick_model1.attr({
            display: "block"
        });
        update_tick_model1.attr({
            display: "block"
        });
        deleate_tick_model1.attr({
            display: "block"
        });
        listingCheckBoxClicked_model1 = true;
    } else if (listingCheckBoxClicked_model1) {
        listing_tick_model1.attr({
            display: "none"
        });
        update_tick_model1.attr({
            display: "none"
        });
        deleate_tick_model1.attr({
            display: "none"
        });
        listingCheckBoxClicked_model1 = false;
    }
}

//now set checkboxes on front of Crud operations...
var createCheckBox_model1 = model1.rect(0, 0, 12, 12, 1, 1);
createCheckBox_model1.attr({
    x: (Number(create_model1.node.attributes.x.nodeValue) + 60),
    y: (create_model1.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
createCheckBox_model1.click(createCheckBoxClick_model1);
var listingCheckBox_model1 = model1.rect(0, 0, 12, 12, 1, 1);
listingCheckBox_model1.attr({
    x: (Number(listing_model1.node.attributes.x.nodeValue) + 60),
    y: (listing_model1.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
listingCheckBox_model1.click(listingCheckBoxClick_model1);
var updateCheckBox_model1 = model1.rect(0, 0, 12, 12, 1, 1);
updateCheckBox_model1.attr({
    x: (Number(update_model1.node.attributes.x.nodeValue) + 60),
    y: (update_model1.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
updateCheckBox_model1.click(listingCheckBoxClick_model1);
var deleateCheckBox_model1 = model1.rect(0, 0, 12, 12, 1, 1);
deleateCheckBox_model1.attr({
    x: (Number(deleate_model1.node.attributes.x.nodeValue) + 60),
    y: (deleate_model1.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
deleateCheckBox_model1.click(listingCheckBoxClick_model1);

//tick inside create check_box...
var create_tick_path_model1 = "M " + (createCheckBox_model1.node.x.animVal.value + 1) + " " + (createCheckBox_model1.node.y.animVal.value + 6) + "L " + (createCheckBox_model1.node.x.animVal.value + 5) + " " + (createCheckBox_model1.node.y.animVal.value + 10) + "L " + (createCheckBox_model1.node.x.animVal.value + createCheckBox_model1.node.width.animVal.value) + " " + (createCheckBox_model1.node.y.animVal.value - 2);
var create_tick_model1 = model1.path(create_tick_path_model1);
create_tick_model1.click(createCheckBoxClick_model1);
create_tick_model1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside listing check_box...
var listing_tick_path_model1 = "M " + (listingCheckBox_model1.node.x.animVal.value + 1) + " " + (listingCheckBox_model1.node.y.animVal.value + 6) + "L " + (listingCheckBox_model1.node.x.animVal.value + 5) + " " + (listingCheckBox_model1.node.y.animVal.value + 10) + "L " + (listingCheckBox_model1.node.x.animVal.value + listingCheckBox_model1.node.width.animVal.value) + " " + (listingCheckBox_model1.node.y.animVal.value - 2);
var listing_tick_model1 = model1.path(listing_tick_path_model1);
listing_tick_model1.click(listingCheckBoxClick_model1);
listing_tick_model1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var update_tick_path_model1 = "M " + (updateCheckBox_model1.node.x.animVal.value + 1) + " " + (updateCheckBox_model1.node.y.animVal.value + 6) + "L " + (updateCheckBox_model1.node.x.animVal.value + 5) + " " + (updateCheckBox_model1.node.y.animVal.value + 10) + "L " + (updateCheckBox_model1.node.x.animVal.value + updateCheckBox_model1.node.width.animVal.value) + " " + (updateCheckBox_model1.node.y.animVal.value - 2);
var update_tick_model1 = model1.path(update_tick_path_model1);
update_tick_model1.click(listingCheckBoxClick_model1);
update_tick_model1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var deleate_tick_path_model1 = "M " + (deleateCheckBox_model1.node.x.animVal.value + 1) + " " + (deleateCheckBox_model1.node.y.animVal.value + 6) + "L " + (deleateCheckBox_model1.node.x.animVal.value + 5) + " " + (deleateCheckBox_model1.node.y.animVal.value + 10) + "L " + (deleateCheckBox_model1.node.x.animVal.value + deleateCheckBox_model1.node.width.animVal.value) + " " + (deleateCheckBox_model1.node.y.animVal.value - 2);
var deleate_tick_model1 = model1.path(deleate_tick_path_model1);
deleate_tick_model1.click(listingCheckBoxClick_model1);
deleate_tick_model1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

var crud_opt_group_model1 = model1.group(crud_opt_model1, create_model1, listing_model1, update_model1, deleate_model1, createCheckBox_model1, listingCheckBox_model1, updateCheckBox_model1, deleateCheckBox_model1, create_tick_model1, listing_tick_model1, update_tick_model1, deleate_tick_model1);
crud_opt_group_model1.attr({
    'display': 'none'
})
//relative modals svg...



var assembly_hasAndBelongsToMany0 = Snap("#model1");

//modal rectangle...
var drag_title_assembly_hasAndBelongsToMany0 = Snap.parse('<title>Drag and Drop here related model if exist for generate relation inside form</title>');

var block_assembly_hasAndBelongsToMany0 = assembly_hasAndBelongsToMany0.rect(20, 20, 150, 100, 5, 5);
block_assembly_hasAndBelongsToMany0.attr({
    x: (block_model1.node.x.animVal.value + block_model1.node.width.animVal.value + 570),
    width : (block_model1.node.width.animVal.value),
    fill: "rgb(236, 240, 241)",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray': 5 
});


block_assembly_hasAndBelongsToMany0.append(drag_title_assembly_hasAndBelongsToMany0);


//modal text populate inside modal rect...
var text_assembly_hasAndBelongsToMany0 = assembly_hasAndBelongsToMany0.text(0, 0, "ASSEMBLY!");
text_assembly_hasAndBelongsToMany0.attr({
    x: block_assembly_hasAndBelongsToMany0.node.x.animVal.value + 10,
    y: block_assembly_hasAndBelongsToMany0.node.y.animVal.value + 20,
    'font-size': 13
});


// line separates modal head and body...
var line_assembly_hasAndBelongsToMany0 = assembly_hasAndBelongsToMany0.line(0, 0, 0, 0);
line_assembly_hasAndBelongsToMany0.attr({
    x1: block_assembly_hasAndBelongsToMany0.node.x.animVal.value,
    y1: Number(text_assembly_hasAndBelongsToMany0.node.attributes.y.nodeValue) + 5,
    x2: block_assembly_hasAndBelongsToMany0.node.x.animVal.value + block_assembly_hasAndBelongsToMany0.node.width.animVal.value,
    y2: Number(text_assembly_hasAndBelongsToMany0.node.attributes.y.nodeValue) + 5,
    stroke: "#1f2c39",
    strokeWidth: 1,
    strokeLinecap: "round"
});

// change coordinates of line and mode1_rect according to text
/*<!--block_assembly_hasAndBelongsToMany0.attr({
    width: Number(text_assembly_hasAndBelongsToMany0.node.attributes.x.value) + (Number(text_assembly_hasAndBelongsToMany0.node.textContent.length) * 10 + 30)
});
line_assembly_hasAndBelongsToMany0.attr({
    x2: (block_assembly_hasAndBelongsToMany0.node.width.animVal.value + block_assembly_hasAndBelongsToMany0.node.x.animVal.value)
})-->*/

//tooltip on checkbox...
var select_title_assembly_hasAndBelongsToMany0 = Snap.parse('<title>Click here to select model for CRUD Operations , if unchecked Crud form are not created</title>');

//select box checked when modal form is created
var select_assembly_hasAndBelongsToMany0 = assembly_hasAndBelongsToMany0.rect(0, 0, 15, 15, 2, 2);
select_assembly_hasAndBelongsToMany0.attr({
    x: (block_assembly_hasAndBelongsToMany0.node.width.animVal.value + block_assembly_hasAndBelongsToMany0.node.x.animVal.value - 10),
    y: (block_assembly_hasAndBelongsToMany0.node.y.animVal.value - 10),
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 2
});
select_assembly_hasAndBelongsToMany0.append(select_title_assembly_hasAndBelongsToMany0);

//check symbol inside select box...
var tick_path_assembly_hasAndBelongsToMany0 = "M " + (select_assembly_hasAndBelongsToMany0.node.x.animVal.value + 3) + " " + (select_assembly_hasAndBelongsToMany0.node.y.animVal.value + 5) + "L " + (select_assembly_hasAndBelongsToMany0.node.x.animVal.value + 7) + " " + (select_assembly_hasAndBelongsToMany0.node.y.animVal.value + 10) + "L " + (select_assembly_hasAndBelongsToMany0.node.x.animVal.value + select_assembly_hasAndBelongsToMany0.node.width.animVal.value) + " " + (select_assembly_hasAndBelongsToMany0.node.y.animVal.value - 3);
var tick_assembly_hasAndBelongsToMany0 = assembly_hasAndBelongsToMany0.path(tick_path_assembly_hasAndBelongsToMany0)
tick_assembly_hasAndBelongsToMany0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

//check and uncheck function on checkbox...
var checked_assembly_hasAndBelongsToMany0 = false;
var selectCheckBox_assembly_hasAndBelongsToMany0 = function () {
    if (!checked_assembly_hasAndBelongsToMany0) {
        crud_opt_group_assembly_hasAndBelongsToMany0.attr({
            'display': 'block'
        })
        tick_assembly_hasAndBelongsToMany0.attr({ display : "block"});
        block_assembly_hasAndBelongsToMany0.attr({ x : (block_model1.node.x.animVal.value + block_model1.node.width.animVal.value + 570)});
        checked_assembly_hasAndBelongsToMany0 = true;
    } else if (checked_assembly_hasAndBelongsToMany0) {
        crud_opt_group_assembly_hasAndBelongsToMany0.attr({
            'display': 'none'
        })
        tick_assembly_hasAndBelongsToMany0.attr({ display : "none"});
        checked_assembly_hasAndBelongsToMany0 = false;
    }
};
select_assembly_hasAndBelongsToMany0.click(selectCheckBox_assembly_hasAndBelongsToMany0);
tick_assembly_hasAndBelongsToMany0.click(selectCheckBox_assembly_hasAndBelongsToMany0);

//Crud Rect...
var crud_opt_assembly_hasAndBelongsToMany0 = assembly_hasAndBelongsToMany0.rect(0, 0, 80, 90, 5, 5);
crud_opt_assembly_hasAndBelongsToMany0.attr({
    x: (select_assembly_hasAndBelongsToMany0.node.x.animVal.value + 15),
    y: (select_assembly_hasAndBelongsToMany0.node.y.animVal.value + 20),
    fill: "white",
    stroke: "#1f2c39",
    'stroke-dasharray': 10
})

//Crud options inside Crud_opt rect...
var create_assembly_hasAndBelongsToMany0 = assembly_hasAndBelongsToMany0.text(0, 0, "-   create");
create_assembly_hasAndBelongsToMany0.attr({
    x: (crud_opt_assembly_hasAndBelongsToMany0.node.x.animVal.value + 5),
    y: (crud_opt_assembly_hasAndBelongsToMany0.node.y.animVal.value + 20),
    'font-size': 15
});
var listing_assembly_hasAndBelongsToMany0 = assembly_hasAndBelongsToMany0.text(0, 0, "-   Listing");
listing_assembly_hasAndBelongsToMany0.attr({
    x: (crud_opt_assembly_hasAndBelongsToMany0.node.x.animVal.value + 5),
    y: (crud_opt_assembly_hasAndBelongsToMany0.node.y.animVal.value + 40),
    'font-size': 15
});
var update_assembly_hasAndBelongsToMany0 = assembly_hasAndBelongsToMany0.text(0, 0, "-   update");
update_assembly_hasAndBelongsToMany0.attr({
    x: (crud_opt_assembly_hasAndBelongsToMany0.node.x.animVal.value + 5),
    y: (crud_opt_assembly_hasAndBelongsToMany0.node.y.animVal.value + 60),
    'font-size': 15
});
var deleate_assembly_hasAndBelongsToMany0 = assembly_hasAndBelongsToMany0.text(0, 0, "-   delete");
deleate_assembly_hasAndBelongsToMany0.attr({
    x: (crud_opt_assembly_hasAndBelongsToMany0.node.x.animVal.value + 5),
    y: (crud_opt_assembly_hasAndBelongsToMany0.node.y.animVal.value + 80),
    'font-size': 15
});

//check and uncheck Crud options functions...
var createCheckBoxClicked_assembly_hasAndBelongsToMany0 = false;
var createCheckBoxClick_assembly_hasAndBelongsToMany0 = function () {
    if (!createCheckBoxClicked_assembly_hasAndBelongsToMany0) {
        create_tick_assembly_hasAndBelongsToMany0.attr({
            display: "block"
        });
        createCheckBoxClicked_assembly_hasAndBelongsToMany0 = true;
    } else if (createCheckBoxClicked_assembly_hasAndBelongsToMany0) {
        create_tick_assembly_hasAndBelongsToMany0.attr({
            display: "none"
        });
        createCheckBoxClicked_assembly_hasAndBelongsToMany0 = false;
    }
}

//listing check all three remaining options include listing , delete , edit
var listingCheckBoxClicked_assembly_hasAndBelongsToMany0 = false;
var listingCheckBoxClick_assembly_hasAndBelongsToMany0 = function () {
    if (!listingCheckBoxClicked_assembly_hasAndBelongsToMany0) {
        listing_tick_assembly_hasAndBelongsToMany0.attr({
            display: "block"
        });
        update_tick_assembly_hasAndBelongsToMany0.attr({
            display: "block"
        });
        deleate_tick_assembly_hasAndBelongsToMany0.attr({
            display: "block"
        });
        listingCheckBoxClicked_assembly_hasAndBelongsToMany0 = true;
    } else if (listingCheckBoxClicked_assembly_hasAndBelongsToMany0) {
        listing_tick_assembly_hasAndBelongsToMany0.attr({
            display: "none"
        });
        update_tick_assembly_hasAndBelongsToMany0.attr({
            display: "none"
        });
        deleate_tick_assembly_hasAndBelongsToMany0.attr({
            display: "none"
        });
        listingCheckBoxClicked_assembly_hasAndBelongsToMany0 = false;
    }
}

//now set checkboxes on front of Crud operations...
var createCheckBox_assembly_hasAndBelongsToMany0 = assembly_hasAndBelongsToMany0.rect(0, 0, 12, 12, 1, 1);
createCheckBox_assembly_hasAndBelongsToMany0.attr({
    x: (Number(create_assembly_hasAndBelongsToMany0.node.attributes.x.nodeValue) + 60),
    y: (create_assembly_hasAndBelongsToMany0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
createCheckBox_assembly_hasAndBelongsToMany0.click(createCheckBoxClick_assembly_hasAndBelongsToMany0);
var listingCheckBox_assembly_hasAndBelongsToMany0 = assembly_hasAndBelongsToMany0.rect(0, 0, 12, 12, 1, 1);
listingCheckBox_assembly_hasAndBelongsToMany0.attr({
    x: (Number(listing_assembly_hasAndBelongsToMany0.node.attributes.x.nodeValue) + 60),
    y: (listing_assembly_hasAndBelongsToMany0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
listingCheckBox_assembly_hasAndBelongsToMany0.click(listingCheckBoxClick_assembly_hasAndBelongsToMany0);
var updateCheckBox_assembly_hasAndBelongsToMany0 = assembly_hasAndBelongsToMany0.rect(0, 0, 12, 12, 1, 1);
updateCheckBox_assembly_hasAndBelongsToMany0.attr({
    x: (Number(update_assembly_hasAndBelongsToMany0.node.attributes.x.nodeValue) + 60),
    y: (update_assembly_hasAndBelongsToMany0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
updateCheckBox_assembly_hasAndBelongsToMany0.click(listingCheckBoxClick_assembly_hasAndBelongsToMany0);
var deleateCheckBox_assembly_hasAndBelongsToMany0 = assembly_hasAndBelongsToMany0.rect(0, 0, 12, 12, 1, 1);
deleateCheckBox_assembly_hasAndBelongsToMany0.attr({
    x: (Number(deleate_assembly_hasAndBelongsToMany0.node.attributes.x.nodeValue) + 60),
    y: (deleate_assembly_hasAndBelongsToMany0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
deleateCheckBox_assembly_hasAndBelongsToMany0.click(listingCheckBoxClick_assembly_hasAndBelongsToMany0);

//tick inside create check_box...
var create_tick_path_assembly_hasAndBelongsToMany0 = "M " + (createCheckBox_assembly_hasAndBelongsToMany0.node.x.animVal.value + 1) + " " + (createCheckBox_assembly_hasAndBelongsToMany0.node.y.animVal.value + 6) + "L " + (createCheckBox_assembly_hasAndBelongsToMany0.node.x.animVal.value + 5) + " " + (createCheckBox_assembly_hasAndBelongsToMany0.node.y.animVal.value + 10) + "L " + (createCheckBox_assembly_hasAndBelongsToMany0.node.x.animVal.value + createCheckBox_assembly_hasAndBelongsToMany0.node.width.animVal.value) + " " + (createCheckBox_assembly_hasAndBelongsToMany0.node.y.animVal.value - 2);
var create_tick_assembly_hasAndBelongsToMany0 = assembly_hasAndBelongsToMany0.path(create_tick_path_assembly_hasAndBelongsToMany0);
create_tick_assembly_hasAndBelongsToMany0.click(createCheckBoxClick_assembly_hasAndBelongsToMany0);
create_tick_assembly_hasAndBelongsToMany0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside listing check_box...
var listing_tick_path_assembly_hasAndBelongsToMany0 = "M " + (listingCheckBox_assembly_hasAndBelongsToMany0.node.x.animVal.value + 1) + " " + (listingCheckBox_assembly_hasAndBelongsToMany0.node.y.animVal.value + 6) + "L " + (listingCheckBox_assembly_hasAndBelongsToMany0.node.x.animVal.value + 5) + " " + (listingCheckBox_assembly_hasAndBelongsToMany0.node.y.animVal.value + 10) + "L " + (listingCheckBox_assembly_hasAndBelongsToMany0.node.x.animVal.value + listingCheckBox_assembly_hasAndBelongsToMany0.node.width.animVal.value) + " " + (listingCheckBox_assembly_hasAndBelongsToMany0.node.y.animVal.value - 2);
var listing_tick_assembly_hasAndBelongsToMany0 = assembly_hasAndBelongsToMany0.path(listing_tick_path_assembly_hasAndBelongsToMany0);
listing_tick_assembly_hasAndBelongsToMany0.click(listingCheckBoxClick_assembly_hasAndBelongsToMany0);
listing_tick_assembly_hasAndBelongsToMany0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var update_tick_path_assembly_hasAndBelongsToMany0 = "M " + (updateCheckBox_assembly_hasAndBelongsToMany0.node.x.animVal.value + 1) + " " + (updateCheckBox_assembly_hasAndBelongsToMany0.node.y.animVal.value + 6) + "L " + (updateCheckBox_assembly_hasAndBelongsToMany0.node.x.animVal.value + 5) + " " + (updateCheckBox_assembly_hasAndBelongsToMany0.node.y.animVal.value + 10) + "L " + (updateCheckBox_assembly_hasAndBelongsToMany0.node.x.animVal.value + updateCheckBox_assembly_hasAndBelongsToMany0.node.width.animVal.value) + " " + (updateCheckBox_assembly_hasAndBelongsToMany0.node.y.animVal.value - 2);
var update_tick_assembly_hasAndBelongsToMany0 = assembly_hasAndBelongsToMany0.path(update_tick_path_assembly_hasAndBelongsToMany0);
update_tick_assembly_hasAndBelongsToMany0.click(listingCheckBoxClick_assembly_hasAndBelongsToMany0);
update_tick_assembly_hasAndBelongsToMany0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var deleate_tick_path_assembly_hasAndBelongsToMany0 = "M " + (deleateCheckBox_assembly_hasAndBelongsToMany0.node.x.animVal.value + 1) + " " + (deleateCheckBox_assembly_hasAndBelongsToMany0.node.y.animVal.value + 6) + "L " + (deleateCheckBox_assembly_hasAndBelongsToMany0.node.x.animVal.value + 5) + " " + (deleateCheckBox_assembly_hasAndBelongsToMany0.node.y.animVal.value + 10) + "L " + (deleateCheckBox_assembly_hasAndBelongsToMany0.node.x.animVal.value + deleateCheckBox_assembly_hasAndBelongsToMany0.node.width.animVal.value) + " " + (deleateCheckBox_assembly_hasAndBelongsToMany0.node.y.animVal.value - 2);
var deleate_tick_assembly_hasAndBelongsToMany0 = assembly_hasAndBelongsToMany0.path(deleate_tick_path_assembly_hasAndBelongsToMany0);
deleate_tick_assembly_hasAndBelongsToMany0.click(listingCheckBoxClick_assembly_hasAndBelongsToMany0);
deleate_tick_assembly_hasAndBelongsToMany0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

var crud_opt_group_assembly_hasAndBelongsToMany0 = assembly_hasAndBelongsToMany0.group(crud_opt_assembly_hasAndBelongsToMany0, create_assembly_hasAndBelongsToMany0, listing_assembly_hasAndBelongsToMany0, update_assembly_hasAndBelongsToMany0, deleate_assembly_hasAndBelongsToMany0, createCheckBox_assembly_hasAndBelongsToMany0, listingCheckBox_assembly_hasAndBelongsToMany0, updateCheckBox_assembly_hasAndBelongsToMany0, deleateCheckBox_assembly_hasAndBelongsToMany0, create_tick_assembly_hasAndBelongsToMany0, listing_tick_assembly_hasAndBelongsToMany0, update_tick_assembly_hasAndBelongsToMany0, deleate_tick_assembly_hasAndBelongsToMany0);
crud_opt_group_assembly_hasAndBelongsToMany0.attr({
    'display': 'none'
})


var model1assembly = Snap("#model1");

//modal rectangle...
var drag_title_model1assembly = Snap.parse('<title>Drag and Drop here related model if exist for generate relation inside form</title>');

var block_model1assembly = model1assembly.rect(20, 20, 150, 100, 5, 5);
block_model1assembly.attr({
    x: (block_model1.node.x.animVal.value + block_model1.node.width.animVal.value + 200),
    width : (block_model1.node.width.animVal.value),
    fill: "rgb(217, 202, 238)",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray': 5 
});


block_model1assembly.append(drag_title_model1assembly);

//modal text populate inside modal rect...
var text_model1assembly = model1assembly.text(0, 0, "model1ASSEMBLY!");
text_model1assembly.attr({
    x: block_model1assembly.node.x.animVal.value + 10,
    y: block_model1assembly.node.y.animVal.value + 20,
    'font-size': 13
});


// line separates modal head and body...
var line_model1assembly = model1assembly.line(0, 0, 0, 0);
line_model1assembly.attr({
    x1: block_model1assembly.node.x.animVal.value,
    y1: Number(text_model1assembly.node.attributes.y.nodeValue) + 5,
    x2: block_model1assembly.node.x.animVal.value + block_model1assembly.node.width.animVal.value,
    y2: Number(text_model1assembly.node.attributes.y.nodeValue) + 5,
    stroke: "#1f2c39",
    strokeWidth: 1,
    strokeLinecap: "round"
});

//line extend line from current model and attach to related model in hasAndBelongsToMany relation...
var model1ToAssemblyPath = "M " + (block_model1assembly.node.x.animVal.value + block_model1assembly.node.width.animVal.value + 100)  + " "  + (block_model1.node.y.animVal.value + 60)+ "V " + (block_assembly_hasAndBelongsToMany0.node.y.animVal.value + 60) + "H " + (block_assembly_hasAndBelongsToMany0.node.x.animVal.value);
var model1ToAssembly = model1.path(model1ToAssemblyPath);
model1ToAssembly.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray' : 5
})

//line and arrows from current model toward linked model of hasAndBelongsToMany relation

var model1Tomodel1AssemblyPath = "M " + (block_model1.node.x.animVal.value + block_model1.node.width.animVal.value + 100) + " " + (block_model1.node.y.animVal.value + 50) + "V " +  (block_model1assembly.node.y.animVal.value + 50) + "H " +  (block_model1assembly.node.x.animVal.value); 


var model1Tomodel1Assembly = model1.path(model1Tomodel1AssemblyPath);
model1Tomodel1Assembly.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1
})
//polygon {Arrow at end of line toward related model}
var model1Tomodel1AssemblyArrowPoints = [block_model1assembly.node.x.animVal.value,(block_model1assembly.node.y.animVal.value+50),(block_model1assembly.node.x.animVal.value-10),(block_model1assembly.node.y.animVal.value+50-10),(block_model1assembly.node.x.animVal.value-10),(block_model1assembly.node.y.animVal.value+50+10)];
var model1Tomodel1AssemblyArrow = model1.polygon(model1Tomodel1AssemblyArrowPoints);
model1Tomodel1AssemblyArrow.attr({
    fill: "#1f2c39",
    stroke: "#1f2c39",
    strokeWidth: 1,
});

//line and arrows from 2nd model toward linked model of hasAndBelongsToMany relation
var AssemblyTomodel1AssemblyPath = "M " + (block_assembly_hasAndBelongsToMany0.node.x.animVal.value) + " " + (block_assembly_hasAndBelongsToMany0.node.y.animVal.value + 50) + "H " + (block_model1assembly.node.x.animVal.value + block_model1assembly.node.width.animVal.value);

var AssemblyTomodel1Assembly = model1.path(AssemblyTomodel1AssemblyPath);
AssemblyTomodel1Assembly.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1
})
//polygon {Arrow at end of line toward related model}
var AssemblyTomodel1AssemblyArrowPoints = [(block_model1assembly.node.x.animVal.value + block_model1assembly.node.width.animVal.value) , (block_model1assembly.node.y.animVal.value + 50) , (block_model1assembly.node.x.animVal.value + block_model1assembly.node.width.animVal.value + 10) , (block_model1assembly.node.y.animVal.value + 50 +10) , (block_model1assembly.node.x.animVal.value + block_model1assembly.node.width.animVal.value + 10) , (block_model1assembly.node.y.animVal.value + 50 - 10)];
var AssemblyTomodel1AssemblyArrow = model1.polygon(AssemblyTomodel1AssemblyArrowPoints);
AssemblyTomodel1AssemblyArrow.attr({
    fill: "#1f2c39",
    stroke: "#1f2c39",
    strokeWidth: 1,
});

//get access to id
var model2 = Snap("#model2");

//modal rectangle...
var drag_title_model2 = Snap.parse('<title>Drag and Drop here related model if exist for generate relation inside form</title>');

var block_model2 = model2.rect(20, 20, 150, 100, 5, 5);
block_model2.attr({
    fill: "rgb(236, 240, 241)",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray': 5
});
block_model2.append(drag_title_model2);

//modal text populate inside modal rect...
var text_model2 = model2.text(0, 0, "MODEL2!");
text_model2.attr({
    x: block_model2.node.x.animVal.value + 10,
    y: block_model2.node.y.animVal.value + 20,
    'font-size': 13
});
// line separates modal head and body...
var line_model2 = model2.line(0, 0, 0, 0);
line_model2.attr({
    x1: block_model2.node.x.animVal.value,
    y1: Number(text_model2.node.attributes.y.nodeValue) + 5,
    x2: block_model2.node.x.animVal.value + block_model2.node.width.animVal.value,
    y2: Number(text_model2.node.attributes.y.nodeValue) + 5,
    stroke: "#1f2c39",
    strokeWidth: 1,
    strokeLinecap: "round"
});

// change coordinates of line and mode1_rect according to text
/*block_model2.attr({
    width: Number(text_model2.node.attributes.x.value) + (Number(text_model2.node.textContent.length) * 10 + 30)
});
line_model2.attr({
    x2: (block_model2.node.width.animVal.value + block_model2.node.x.animVal.value)
})*/

//tooltip on checkbox...
var select_title_model2 = Snap.parse('<title>Click here to select model for CRUD Operations , if unchecked Crud form are not created</title>');

//select box checked when modal form is created
var select_model2 = model2.rect(0, 0, 15, 15, 2, 2);
select_model2.attr({
    x: (block_model2.node.width.animVal.value + block_model2.node.x.animVal.value - 10),
    y: (block_model2.node.y.animVal.value - 10),
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 2
});
select_model2.append(select_title_model2);

//check symbol inside select box...
var tick_path_model2 = "M " + (select_model2.node.x.animVal.value + 3) + " " + (select_model2.node.y.animVal.value + 5) + "L " + (select_model2.node.x.animVal.value + 7) + " " + (select_model2.node.y.animVal.value + 10) + "L " + (select_model2.node.x.animVal.value + select_model2.node.width.animVal.value) + " " + (select_model2.node.y.animVal.value - 3);
var tick_model2 = model2.path(tick_path_model2)
tick_model2.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

//check and uncheck function on checkbox...
var checked_model2 = false;
var selectCheckBox_model2 = function () {
    if (!checked_model2) {
        //  crud_opt_group.removeClass('animated bounceOutUp')
        crud_opt_group_model2.attr({
            'display': 'block'
        })

        tick_model2.attr({ display : "block"});
        // crud_opt_group_model2.addClass('animated bounceInUp');
        checked_model2 = true;
    } else if (checked_model2) {
        crud_opt_group_model2.attr({
            'display': 'none'
        })
        tick_model2.attr({ display : "none"});
        // crud_opt_group.removeClass('animated bounceInUp');
        // crud_opt_group.addClass('animated bounceOutUp')
        checked_model2 = false;
    }
};
select_model2.click(selectCheckBox_model2);
tick_model2.click(selectCheckBox_model2);

//Crud Rect...
var crud_opt_model2 = model2.rect(0, 0, 80, 90, 5, 5);
crud_opt_model2.attr({
    x: (select_model2.node.x.animVal.value + 15),
    y: (select_model2.node.y.animVal.value + 20),
    fill: "white",
    stroke: "#1f2c39",
    'stroke-dasharray': 10
})

//Crud options inside Crud_opt rect...
var create_model2 = model2.text(0, 0, "-   create");
create_model2.attr({
    x: (crud_opt_model2.node.x.animVal.value + 5),
    y: (crud_opt_model2.node.y.animVal.value + 20),
    'font-size': 15
});
var listing_model2 = model2.text(0, 0, "-   Listing");
listing_model2.attr({
    x: (crud_opt_model2.node.x.animVal.value + 5),
    y: (crud_opt_model2.node.y.animVal.value + 40),
    'font-size': 15
});
var update_model2 = model2.text(0, 0, "-   update");
update_model2.attr({
    x: (crud_opt_model2.node.x.animVal.value + 5),
    y: (crud_opt_model2.node.y.animVal.value + 60),
    'font-size': 15
});
var deleate_model2 = model2.text(0, 0, "-   delete");
deleate_model2.attr({
    x: (crud_opt_model2.node.x.animVal.value + 5),
    y: (crud_opt_model2.node.y.animVal.value + 80),
    'font-size': 15
});

//check and uncheck Crud options functions...
var createCheckBoxClicked_model2 = false;
var createCheckBoxClick_model2 = function () {
    if (!createCheckBoxClicked_model2) {
        create_tick_model2.attr({
            display: "block"
        });
        createCheckBoxClicked_model2 = true;
    } else if (createCheckBoxClicked_model2) {
        create_tick_model2.attr({
            display: "none"
        });
        createCheckBoxClicked_model2 = false;
    }
}

//listing check all three remaining options include listing , delete , edit
var listingCheckBoxClicked_model2 = false;
var listingCheckBoxClick_model2 = function () {
    if (!listingCheckBoxClicked_model2) {
        listing_tick_model2.attr({
            display: "block"
        });
        update_tick_model2.attr({
            display: "block"
        });
        deleate_tick_model2.attr({
            display: "block"
        });
        listingCheckBoxClicked_model2 = true;
    } else if (listingCheckBoxClicked_model2) {
        listing_tick_model2.attr({
            display: "none"
        });
        update_tick_model2.attr({
            display: "none"
        });
        deleate_tick_model2.attr({
            display: "none"
        });
        listingCheckBoxClicked_model2 = false;
    }
}

//now set checkboxes on front of Crud operations...
var createCheckBox_model2 = model2.rect(0, 0, 12, 12, 1, 1);
createCheckBox_model2.attr({
    x: (Number(create_model2.node.attributes.x.nodeValue) + 60),
    y: (create_model2.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
createCheckBox_model2.click(createCheckBoxClick_model2);
var listingCheckBox_model2 = model2.rect(0, 0, 12, 12, 1, 1);
listingCheckBox_model2.attr({
    x: (Number(listing_model2.node.attributes.x.nodeValue) + 60),
    y: (listing_model2.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
listingCheckBox_model2.click(listingCheckBoxClick_model2);
var updateCheckBox_model2 = model2.rect(0, 0, 12, 12, 1, 1);
updateCheckBox_model2.attr({
    x: (Number(update_model2.node.attributes.x.nodeValue) + 60),
    y: (update_model2.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
updateCheckBox_model2.click(listingCheckBoxClick_model2);
var deleateCheckBox_model2 = model2.rect(0, 0, 12, 12, 1, 1);
deleateCheckBox_model2.attr({
    x: (Number(deleate_model2.node.attributes.x.nodeValue) + 60),
    y: (deleate_model2.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
deleateCheckBox_model2.click(listingCheckBoxClick_model2);

//tick inside create check_box...
var create_tick_path_model2 = "M " + (createCheckBox_model2.node.x.animVal.value + 1) + " " + (createCheckBox_model2.node.y.animVal.value + 6) + "L " + (createCheckBox_model2.node.x.animVal.value + 5) + " " + (createCheckBox_model2.node.y.animVal.value + 10) + "L " + (createCheckBox_model2.node.x.animVal.value + createCheckBox_model2.node.width.animVal.value) + " " + (createCheckBox_model2.node.y.animVal.value - 2);
var create_tick_model2 = model2.path(create_tick_path_model2);
create_tick_model2.click(createCheckBoxClick_model2);
create_tick_model2.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside listing check_box...
var listing_tick_path_model2 = "M " + (listingCheckBox_model2.node.x.animVal.value + 1) + " " + (listingCheckBox_model2.node.y.animVal.value + 6) + "L " + (listingCheckBox_model2.node.x.animVal.value + 5) + " " + (listingCheckBox_model2.node.y.animVal.value + 10) + "L " + (listingCheckBox_model2.node.x.animVal.value + listingCheckBox_model2.node.width.animVal.value) + " " + (listingCheckBox_model2.node.y.animVal.value - 2);
var listing_tick_model2 = model2.path(listing_tick_path_model2);
listing_tick_model2.click(listingCheckBoxClick_model2);
listing_tick_model2.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var update_tick_path_model2 = "M " + (updateCheckBox_model2.node.x.animVal.value + 1) + " " + (updateCheckBox_model2.node.y.animVal.value + 6) + "L " + (updateCheckBox_model2.node.x.animVal.value + 5) + " " + (updateCheckBox_model2.node.y.animVal.value + 10) + "L " + (updateCheckBox_model2.node.x.animVal.value + updateCheckBox_model2.node.width.animVal.value) + " " + (updateCheckBox_model2.node.y.animVal.value - 2);
var update_tick_model2 = model2.path(update_tick_path_model2);
update_tick_model2.click(listingCheckBoxClick_model2);
update_tick_model2.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var deleate_tick_path_model2 = "M " + (deleateCheckBox_model2.node.x.animVal.value + 1) + " " + (deleateCheckBox_model2.node.y.animVal.value + 6) + "L " + (deleateCheckBox_model2.node.x.animVal.value + 5) + " " + (deleateCheckBox_model2.node.y.animVal.value + 10) + "L " + (deleateCheckBox_model2.node.x.animVal.value + deleateCheckBox_model2.node.width.animVal.value) + " " + (deleateCheckBox_model2.node.y.animVal.value - 2);
var deleate_tick_model2 = model2.path(deleate_tick_path_model2);
deleate_tick_model2.click(listingCheckBoxClick_model2);
deleate_tick_model2.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

var crud_opt_group_model2 = model2.group(crud_opt_model2, create_model2, listing_model2, update_model2, deleate_model2, createCheckBox_model2, listingCheckBox_model2, updateCheckBox_model2, deleateCheckBox_model2, create_tick_model2, listing_tick_model2, update_tick_model2, deleate_tick_model2);
crud_opt_group_model2.attr({
    'display': 'none'
})
//relative modals svg...

//get access to id
var model = Snap("#model");

//modal rectangle...
var drag_title_model = Snap.parse('<title>Drag and Drop here related model if exist for generate relation inside form</title>');

var block_model = model.rect(20, 20, 150, 100, 5, 5);
block_model.attr({
    fill: "rgb(236, 240, 241)",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray': 5
});
block_model.append(drag_title_model);

var model_rel_path = "M " + (block_model.node.x.animVal.value + block_model.node.width.animVal.value ) + " " + (block_model.node.y.animVal.value + 50) + "H " + (block_model.node.x.animVal.value + block_model.node.width.animVal.value + 100);
var model_rel_path_half = model.path(model_rel_path);
model_rel_path_half.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1
});

    var model_rel_path_linkModel = "M " + (block_model.node.x.animVal.value + block_model.node.width.animVal.value ) + " " + (block_model.node.y.animVal.value + 60) + "H " + (block_model.node.x.animVal.value + block_model.node.width.animVal.value + 450);        
    var model_rel_path_half_LinkModel = model.path(model_rel_path_linkModel);
    model_rel_path_half_LinkModel.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray' : 5
});


//modal text populate inside modal rect...
var text_model = model.text(0, 0, "MODEL!");
text_model.attr({
    x: block_model.node.x.animVal.value + 10,
    y: block_model.node.y.animVal.value + 20,
    'font-size': 13
});
// line separates modal head and body...
var line_model = model.line(0, 0, 0, 0);
line_model.attr({
    x1: block_model.node.x.animVal.value,
    y1: Number(text_model.node.attributes.y.nodeValue) + 5,
    x2: block_model.node.x.animVal.value + block_model.node.width.animVal.value,
    y2: Number(text_model.node.attributes.y.nodeValue) + 5,
    stroke: "#1f2c39",
    strokeWidth: 1,
    strokeLinecap: "round"
});

// change coordinates of line and mode1_rect according to text
/*block_model.attr({
    width: Number(text_model.node.attributes.x.value) + (Number(text_model.node.textContent.length) * 10 + 30)
});
line_model.attr({
    x2: (block_model.node.width.animVal.value + block_model.node.x.animVal.value)
})*/

//tooltip on checkbox...
var select_title_model = Snap.parse('<title>Click here to select model for CRUD Operations , if unchecked Crud form are not created</title>');

//select box checked when modal form is created
var select_model = model.rect(0, 0, 15, 15, 2, 2);
select_model.attr({
    x: (block_model.node.width.animVal.value + block_model.node.x.animVal.value - 10),
    y: (block_model.node.y.animVal.value - 10),
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 2
});
select_model.append(select_title_model);

//check symbol inside select box...
var tick_path_model = "M " + (select_model.node.x.animVal.value + 3) + " " + (select_model.node.y.animVal.value + 5) + "L " + (select_model.node.x.animVal.value + 7) + " " + (select_model.node.y.animVal.value + 10) + "L " + (select_model.node.x.animVal.value + select_model.node.width.animVal.value) + " " + (select_model.node.y.animVal.value - 3);
var tick_model = model.path(tick_path_model)
tick_model.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

//check and uncheck function on checkbox...
var checked_model = false;
var selectCheckBox_model = function () {
    if (!checked_model) {
        //  crud_opt_group.removeClass('animated bounceOutUp')
        crud_opt_group_model.attr({
            'display': 'block'
        })

        tick_model.attr({ display : "block"});
        // crud_opt_group_model.addClass('animated bounceInUp');
        checked_model = true;
    } else if (checked_model) {
        crud_opt_group_model.attr({
            'display': 'none'
        })
        tick_model.attr({ display : "none"});
        // crud_opt_group.removeClass('animated bounceInUp');
        // crud_opt_group.addClass('animated bounceOutUp')
        checked_model = false;
    }
};
select_model.click(selectCheckBox_model);
tick_model.click(selectCheckBox_model);

//Crud Rect...
var crud_opt_model = model.rect(0, 0, 80, 90, 5, 5);
crud_opt_model.attr({
    x: (select_model.node.x.animVal.value + 15),
    y: (select_model.node.y.animVal.value + 20),
    fill: "white",
    stroke: "#1f2c39",
    'stroke-dasharray': 10
})

//Crud options inside Crud_opt rect...
var create_model = model.text(0, 0, "-   create");
create_model.attr({
    x: (crud_opt_model.node.x.animVal.value + 5),
    y: (crud_opt_model.node.y.animVal.value + 20),
    'font-size': 15
});
var listing_model = model.text(0, 0, "-   Listing");
listing_model.attr({
    x: (crud_opt_model.node.x.animVal.value + 5),
    y: (crud_opt_model.node.y.animVal.value + 40),
    'font-size': 15
});
var update_model = model.text(0, 0, "-   update");
update_model.attr({
    x: (crud_opt_model.node.x.animVal.value + 5),
    y: (crud_opt_model.node.y.animVal.value + 60),
    'font-size': 15
});
var deleate_model = model.text(0, 0, "-   delete");
deleate_model.attr({
    x: (crud_opt_model.node.x.animVal.value + 5),
    y: (crud_opt_model.node.y.animVal.value + 80),
    'font-size': 15
});

//check and uncheck Crud options functions...
var createCheckBoxClicked_model = false;
var createCheckBoxClick_model = function () {
    if (!createCheckBoxClicked_model) {
        create_tick_model.attr({
            display: "block"
        });
        createCheckBoxClicked_model = true;
    } else if (createCheckBoxClicked_model) {
        create_tick_model.attr({
            display: "none"
        });
        createCheckBoxClicked_model = false;
    }
}

//listing check all three remaining options include listing , delete , edit
var listingCheckBoxClicked_model = false;
var listingCheckBoxClick_model = function () {
    if (!listingCheckBoxClicked_model) {
        listing_tick_model.attr({
            display: "block"
        });
        update_tick_model.attr({
            display: "block"
        });
        deleate_tick_model.attr({
            display: "block"
        });
        listingCheckBoxClicked_model = true;
    } else if (listingCheckBoxClicked_model) {
        listing_tick_model.attr({
            display: "none"
        });
        update_tick_model.attr({
            display: "none"
        });
        deleate_tick_model.attr({
            display: "none"
        });
        listingCheckBoxClicked_model = false;
    }
}

//now set checkboxes on front of Crud operations...
var createCheckBox_model = model.rect(0, 0, 12, 12, 1, 1);
createCheckBox_model.attr({
    x: (Number(create_model.node.attributes.x.nodeValue) + 60),
    y: (create_model.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
createCheckBox_model.click(createCheckBoxClick_model);
var listingCheckBox_model = model.rect(0, 0, 12, 12, 1, 1);
listingCheckBox_model.attr({
    x: (Number(listing_model.node.attributes.x.nodeValue) + 60),
    y: (listing_model.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
listingCheckBox_model.click(listingCheckBoxClick_model);
var updateCheckBox_model = model.rect(0, 0, 12, 12, 1, 1);
updateCheckBox_model.attr({
    x: (Number(update_model.node.attributes.x.nodeValue) + 60),
    y: (update_model.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
updateCheckBox_model.click(listingCheckBoxClick_model);
var deleateCheckBox_model = model.rect(0, 0, 12, 12, 1, 1);
deleateCheckBox_model.attr({
    x: (Number(deleate_model.node.attributes.x.nodeValue) + 60),
    y: (deleate_model.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
deleateCheckBox_model.click(listingCheckBoxClick_model);

//tick inside create check_box...
var create_tick_path_model = "M " + (createCheckBox_model.node.x.animVal.value + 1) + " " + (createCheckBox_model.node.y.animVal.value + 6) + "L " + (createCheckBox_model.node.x.animVal.value + 5) + " " + (createCheckBox_model.node.y.animVal.value + 10) + "L " + (createCheckBox_model.node.x.animVal.value + createCheckBox_model.node.width.animVal.value) + " " + (createCheckBox_model.node.y.animVal.value - 2);
var create_tick_model = model.path(create_tick_path_model);
create_tick_model.click(createCheckBoxClick_model);
create_tick_model.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside listing check_box...
var listing_tick_path_model = "M " + (listingCheckBox_model.node.x.animVal.value + 1) + " " + (listingCheckBox_model.node.y.animVal.value + 6) + "L " + (listingCheckBox_model.node.x.animVal.value + 5) + " " + (listingCheckBox_model.node.y.animVal.value + 10) + "L " + (listingCheckBox_model.node.x.animVal.value + listingCheckBox_model.node.width.animVal.value) + " " + (listingCheckBox_model.node.y.animVal.value - 2);
var listing_tick_model = model.path(listing_tick_path_model);
listing_tick_model.click(listingCheckBoxClick_model);
listing_tick_model.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var update_tick_path_model = "M " + (updateCheckBox_model.node.x.animVal.value + 1) + " " + (updateCheckBox_model.node.y.animVal.value + 6) + "L " + (updateCheckBox_model.node.x.animVal.value + 5) + " " + (updateCheckBox_model.node.y.animVal.value + 10) + "L " + (updateCheckBox_model.node.x.animVal.value + updateCheckBox_model.node.width.animVal.value) + " " + (updateCheckBox_model.node.y.animVal.value - 2);
var update_tick_model = model.path(update_tick_path_model);
update_tick_model.click(listingCheckBoxClick_model);
update_tick_model.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var deleate_tick_path_model = "M " + (deleateCheckBox_model.node.x.animVal.value + 1) + " " + (deleateCheckBox_model.node.y.animVal.value + 6) + "L " + (deleateCheckBox_model.node.x.animVal.value + 5) + " " + (deleateCheckBox_model.node.y.animVal.value + 10) + "L " + (deleateCheckBox_model.node.x.animVal.value + deleateCheckBox_model.node.width.animVal.value) + " " + (deleateCheckBox_model.node.y.animVal.value - 2);
var deleate_tick_model = model.path(deleate_tick_path_model);
deleate_tick_model.click(listingCheckBoxClick_model);
deleate_tick_model.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

var crud_opt_group_model = model.group(crud_opt_model, create_model, listing_model, update_model, deleate_model, createCheckBox_model, listingCheckBox_model, updateCheckBox_model, deleateCheckBox_model, create_tick_model, listing_tick_model, update_tick_model, deleate_tick_model);
crud_opt_group_model.attr({
    'display': 'none'
})
//relative modals svg...



var model1_hasAndBelongsToMany0 = Snap("#model");

//modal rectangle...
var drag_title_model1_hasAndBelongsToMany0 = Snap.parse('<title>Drag and Drop here related model if exist for generate relation inside form</title>');

var block_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.rect(20, 20, 150, 100, 5, 5);
block_model1_hasAndBelongsToMany0.attr({
    x: (block_model.node.x.animVal.value + block_model.node.width.animVal.value + 570),
    width : (block_model.node.width.animVal.value),
    fill: "rgb(236, 240, 241)",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray': 5 
});


block_model1_hasAndBelongsToMany0.append(drag_title_model1_hasAndBelongsToMany0);


//modal text populate inside modal rect...
var text_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.text(0, 0, "MODEL1!");
text_model1_hasAndBelongsToMany0.attr({
    x: block_model1_hasAndBelongsToMany0.node.x.animVal.value + 10,
    y: block_model1_hasAndBelongsToMany0.node.y.animVal.value + 20,
    'font-size': 13
});


// line separates modal head and body...
var line_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.line(0, 0, 0, 0);
line_model1_hasAndBelongsToMany0.attr({
    x1: block_model1_hasAndBelongsToMany0.node.x.animVal.value,
    y1: Number(text_model1_hasAndBelongsToMany0.node.attributes.y.nodeValue) + 5,
    x2: block_model1_hasAndBelongsToMany0.node.x.animVal.value + block_model1_hasAndBelongsToMany0.node.width.animVal.value,
    y2: Number(text_model1_hasAndBelongsToMany0.node.attributes.y.nodeValue) + 5,
    stroke: "#1f2c39",
    strokeWidth: 1,
    strokeLinecap: "round"
});

// change coordinates of line and mode1_rect according to text
/*<!--block_model1_hasAndBelongsToMany0.attr({
    width: Number(text_model1_hasAndBelongsToMany0.node.attributes.x.value) + (Number(text_model1_hasAndBelongsToMany0.node.textContent.length) * 10 + 30)
});
line_model1_hasAndBelongsToMany0.attr({
    x2: (block_model1_hasAndBelongsToMany0.node.width.animVal.value + block_model1_hasAndBelongsToMany0.node.x.animVal.value)
})-->*/

//tooltip on checkbox...
var select_title_model1_hasAndBelongsToMany0 = Snap.parse('<title>Click here to select model for CRUD Operations , if unchecked Crud form are not created</title>');

//select box checked when modal form is created
var select_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.rect(0, 0, 15, 15, 2, 2);
select_model1_hasAndBelongsToMany0.attr({
    x: (block_model1_hasAndBelongsToMany0.node.width.animVal.value + block_model1_hasAndBelongsToMany0.node.x.animVal.value - 10),
    y: (block_model1_hasAndBelongsToMany0.node.y.animVal.value - 10),
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 2
});
select_model1_hasAndBelongsToMany0.append(select_title_model1_hasAndBelongsToMany0);

//check symbol inside select box...
var tick_path_model1_hasAndBelongsToMany0 = "M " + (select_model1_hasAndBelongsToMany0.node.x.animVal.value + 3) + " " + (select_model1_hasAndBelongsToMany0.node.y.animVal.value + 5) + "L " + (select_model1_hasAndBelongsToMany0.node.x.animVal.value + 7) + " " + (select_model1_hasAndBelongsToMany0.node.y.animVal.value + 10) + "L " + (select_model1_hasAndBelongsToMany0.node.x.animVal.value + select_model1_hasAndBelongsToMany0.node.width.animVal.value) + " " + (select_model1_hasAndBelongsToMany0.node.y.animVal.value - 3);
var tick_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.path(tick_path_model1_hasAndBelongsToMany0)
tick_model1_hasAndBelongsToMany0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

//check and uncheck function on checkbox...
var checked_model1_hasAndBelongsToMany0 = false;
var selectCheckBox_model1_hasAndBelongsToMany0 = function () {
    if (!checked_model1_hasAndBelongsToMany0) {
        crud_opt_group_model1_hasAndBelongsToMany0.attr({
            'display': 'block'
        })
        tick_model1_hasAndBelongsToMany0.attr({ display : "block"});
        block_model1_hasAndBelongsToMany0.attr({ x : (block_model.node.x.animVal.value + block_model.node.width.animVal.value + 570)});
        checked_model1_hasAndBelongsToMany0 = true;
    } else if (checked_model1_hasAndBelongsToMany0) {
        crud_opt_group_model1_hasAndBelongsToMany0.attr({
            'display': 'none'
        })
        tick_model1_hasAndBelongsToMany0.attr({ display : "none"});
        checked_model1_hasAndBelongsToMany0 = false;
    }
};
select_model1_hasAndBelongsToMany0.click(selectCheckBox_model1_hasAndBelongsToMany0);
tick_model1_hasAndBelongsToMany0.click(selectCheckBox_model1_hasAndBelongsToMany0);

//Crud Rect...
var crud_opt_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.rect(0, 0, 80, 90, 5, 5);
crud_opt_model1_hasAndBelongsToMany0.attr({
    x: (select_model1_hasAndBelongsToMany0.node.x.animVal.value + 15),
    y: (select_model1_hasAndBelongsToMany0.node.y.animVal.value + 20),
    fill: "white",
    stroke: "#1f2c39",
    'stroke-dasharray': 10
})

//Crud options inside Crud_opt rect...
var create_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.text(0, 0, "-   create");
create_model1_hasAndBelongsToMany0.attr({
    x: (crud_opt_model1_hasAndBelongsToMany0.node.x.animVal.value + 5),
    y: (crud_opt_model1_hasAndBelongsToMany0.node.y.animVal.value + 20),
    'font-size': 15
});
var listing_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.text(0, 0, "-   Listing");
listing_model1_hasAndBelongsToMany0.attr({
    x: (crud_opt_model1_hasAndBelongsToMany0.node.x.animVal.value + 5),
    y: (crud_opt_model1_hasAndBelongsToMany0.node.y.animVal.value + 40),
    'font-size': 15
});
var update_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.text(0, 0, "-   update");
update_model1_hasAndBelongsToMany0.attr({
    x: (crud_opt_model1_hasAndBelongsToMany0.node.x.animVal.value + 5),
    y: (crud_opt_model1_hasAndBelongsToMany0.node.y.animVal.value + 60),
    'font-size': 15
});
var deleate_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.text(0, 0, "-   delete");
deleate_model1_hasAndBelongsToMany0.attr({
    x: (crud_opt_model1_hasAndBelongsToMany0.node.x.animVal.value + 5),
    y: (crud_opt_model1_hasAndBelongsToMany0.node.y.animVal.value + 80),
    'font-size': 15
});

//check and uncheck Crud options functions...
var createCheckBoxClicked_model1_hasAndBelongsToMany0 = false;
var createCheckBoxClick_model1_hasAndBelongsToMany0 = function () {
    if (!createCheckBoxClicked_model1_hasAndBelongsToMany0) {
        create_tick_model1_hasAndBelongsToMany0.attr({
            display: "block"
        });
        createCheckBoxClicked_model1_hasAndBelongsToMany0 = true;
    } else if (createCheckBoxClicked_model1_hasAndBelongsToMany0) {
        create_tick_model1_hasAndBelongsToMany0.attr({
            display: "none"
        });
        createCheckBoxClicked_model1_hasAndBelongsToMany0 = false;
    }
}

//listing check all three remaining options include listing , delete , edit
var listingCheckBoxClicked_model1_hasAndBelongsToMany0 = false;
var listingCheckBoxClick_model1_hasAndBelongsToMany0 = function () {
    if (!listingCheckBoxClicked_model1_hasAndBelongsToMany0) {
        listing_tick_model1_hasAndBelongsToMany0.attr({
            display: "block"
        });
        update_tick_model1_hasAndBelongsToMany0.attr({
            display: "block"
        });
        deleate_tick_model1_hasAndBelongsToMany0.attr({
            display: "block"
        });
        listingCheckBoxClicked_model1_hasAndBelongsToMany0 = true;
    } else if (listingCheckBoxClicked_model1_hasAndBelongsToMany0) {
        listing_tick_model1_hasAndBelongsToMany0.attr({
            display: "none"
        });
        update_tick_model1_hasAndBelongsToMany0.attr({
            display: "none"
        });
        deleate_tick_model1_hasAndBelongsToMany0.attr({
            display: "none"
        });
        listingCheckBoxClicked_model1_hasAndBelongsToMany0 = false;
    }
}

//now set checkboxes on front of Crud operations...
var createCheckBox_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.rect(0, 0, 12, 12, 1, 1);
createCheckBox_model1_hasAndBelongsToMany0.attr({
    x: (Number(create_model1_hasAndBelongsToMany0.node.attributes.x.nodeValue) + 60),
    y: (create_model1_hasAndBelongsToMany0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
createCheckBox_model1_hasAndBelongsToMany0.click(createCheckBoxClick_model1_hasAndBelongsToMany0);
var listingCheckBox_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.rect(0, 0, 12, 12, 1, 1);
listingCheckBox_model1_hasAndBelongsToMany0.attr({
    x: (Number(listing_model1_hasAndBelongsToMany0.node.attributes.x.nodeValue) + 60),
    y: (listing_model1_hasAndBelongsToMany0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
listingCheckBox_model1_hasAndBelongsToMany0.click(listingCheckBoxClick_model1_hasAndBelongsToMany0);
var updateCheckBox_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.rect(0, 0, 12, 12, 1, 1);
updateCheckBox_model1_hasAndBelongsToMany0.attr({
    x: (Number(update_model1_hasAndBelongsToMany0.node.attributes.x.nodeValue) + 60),
    y: (update_model1_hasAndBelongsToMany0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
updateCheckBox_model1_hasAndBelongsToMany0.click(listingCheckBoxClick_model1_hasAndBelongsToMany0);
var deleateCheckBox_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.rect(0, 0, 12, 12, 1, 1);
deleateCheckBox_model1_hasAndBelongsToMany0.attr({
    x: (Number(deleate_model1_hasAndBelongsToMany0.node.attributes.x.nodeValue) + 60),
    y: (deleate_model1_hasAndBelongsToMany0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
deleateCheckBox_model1_hasAndBelongsToMany0.click(listingCheckBoxClick_model1_hasAndBelongsToMany0);

//tick inside create check_box...
var create_tick_path_model1_hasAndBelongsToMany0 = "M " + (createCheckBox_model1_hasAndBelongsToMany0.node.x.animVal.value + 1) + " " + (createCheckBox_model1_hasAndBelongsToMany0.node.y.animVal.value + 6) + "L " + (createCheckBox_model1_hasAndBelongsToMany0.node.x.animVal.value + 5) + " " + (createCheckBox_model1_hasAndBelongsToMany0.node.y.animVal.value + 10) + "L " + (createCheckBox_model1_hasAndBelongsToMany0.node.x.animVal.value + createCheckBox_model1_hasAndBelongsToMany0.node.width.animVal.value) + " " + (createCheckBox_model1_hasAndBelongsToMany0.node.y.animVal.value - 2);
var create_tick_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.path(create_tick_path_model1_hasAndBelongsToMany0);
create_tick_model1_hasAndBelongsToMany0.click(createCheckBoxClick_model1_hasAndBelongsToMany0);
create_tick_model1_hasAndBelongsToMany0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside listing check_box...
var listing_tick_path_model1_hasAndBelongsToMany0 = "M " + (listingCheckBox_model1_hasAndBelongsToMany0.node.x.animVal.value + 1) + " " + (listingCheckBox_model1_hasAndBelongsToMany0.node.y.animVal.value + 6) + "L " + (listingCheckBox_model1_hasAndBelongsToMany0.node.x.animVal.value + 5) + " " + (listingCheckBox_model1_hasAndBelongsToMany0.node.y.animVal.value + 10) + "L " + (listingCheckBox_model1_hasAndBelongsToMany0.node.x.animVal.value + listingCheckBox_model1_hasAndBelongsToMany0.node.width.animVal.value) + " " + (listingCheckBox_model1_hasAndBelongsToMany0.node.y.animVal.value - 2);
var listing_tick_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.path(listing_tick_path_model1_hasAndBelongsToMany0);
listing_tick_model1_hasAndBelongsToMany0.click(listingCheckBoxClick_model1_hasAndBelongsToMany0);
listing_tick_model1_hasAndBelongsToMany0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var update_tick_path_model1_hasAndBelongsToMany0 = "M " + (updateCheckBox_model1_hasAndBelongsToMany0.node.x.animVal.value + 1) + " " + (updateCheckBox_model1_hasAndBelongsToMany0.node.y.animVal.value + 6) + "L " + (updateCheckBox_model1_hasAndBelongsToMany0.node.x.animVal.value + 5) + " " + (updateCheckBox_model1_hasAndBelongsToMany0.node.y.animVal.value + 10) + "L " + (updateCheckBox_model1_hasAndBelongsToMany0.node.x.animVal.value + updateCheckBox_model1_hasAndBelongsToMany0.node.width.animVal.value) + " " + (updateCheckBox_model1_hasAndBelongsToMany0.node.y.animVal.value - 2);
var update_tick_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.path(update_tick_path_model1_hasAndBelongsToMany0);
update_tick_model1_hasAndBelongsToMany0.click(listingCheckBoxClick_model1_hasAndBelongsToMany0);
update_tick_model1_hasAndBelongsToMany0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var deleate_tick_path_model1_hasAndBelongsToMany0 = "M " + (deleateCheckBox_model1_hasAndBelongsToMany0.node.x.animVal.value + 1) + " " + (deleateCheckBox_model1_hasAndBelongsToMany0.node.y.animVal.value + 6) + "L " + (deleateCheckBox_model1_hasAndBelongsToMany0.node.x.animVal.value + 5) + " " + (deleateCheckBox_model1_hasAndBelongsToMany0.node.y.animVal.value + 10) + "L " + (deleateCheckBox_model1_hasAndBelongsToMany0.node.x.animVal.value + deleateCheckBox_model1_hasAndBelongsToMany0.node.width.animVal.value) + " " + (deleateCheckBox_model1_hasAndBelongsToMany0.node.y.animVal.value - 2);
var deleate_tick_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.path(deleate_tick_path_model1_hasAndBelongsToMany0);
deleate_tick_model1_hasAndBelongsToMany0.click(listingCheckBoxClick_model1_hasAndBelongsToMany0);
deleate_tick_model1_hasAndBelongsToMany0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

var crud_opt_group_model1_hasAndBelongsToMany0 = model1_hasAndBelongsToMany0.group(crud_opt_model1_hasAndBelongsToMany0, create_model1_hasAndBelongsToMany0, listing_model1_hasAndBelongsToMany0, update_model1_hasAndBelongsToMany0, deleate_model1_hasAndBelongsToMany0, createCheckBox_model1_hasAndBelongsToMany0, listingCheckBox_model1_hasAndBelongsToMany0, updateCheckBox_model1_hasAndBelongsToMany0, deleateCheckBox_model1_hasAndBelongsToMany0, create_tick_model1_hasAndBelongsToMany0, listing_tick_model1_hasAndBelongsToMany0, update_tick_model1_hasAndBelongsToMany0, deleate_tick_model1_hasAndBelongsToMany0);
crud_opt_group_model1_hasAndBelongsToMany0.attr({
    'display': 'none'
})


var modelmodel1 = Snap("#model");

//modal rectangle...
var drag_title_modelmodel1 = Snap.parse('<title>Drag and Drop here related model if exist for generate relation inside form</title>');

var block_modelmodel1 = modelmodel1.rect(20, 20, 150, 100, 5, 5);
block_modelmodel1.attr({
    x: (block_model.node.x.animVal.value + block_model.node.width.animVal.value + 200),
    width : (block_model.node.width.animVal.value),
    fill: "rgb(217, 202, 238)",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray': 5 
});


block_modelmodel1.append(drag_title_modelmodel1);

//modal text populate inside modal rect...
var text_modelmodel1 = modelmodel1.text(0, 0, "modelMODEL1!");
text_modelmodel1.attr({
    x: block_modelmodel1.node.x.animVal.value + 10,
    y: block_modelmodel1.node.y.animVal.value + 20,
    'font-size': 13
});


// line separates modal head and body...
var line_modelmodel1 = modelmodel1.line(0, 0, 0, 0);
line_modelmodel1.attr({
    x1: block_modelmodel1.node.x.animVal.value,
    y1: Number(text_modelmodel1.node.attributes.y.nodeValue) + 5,
    x2: block_modelmodel1.node.x.animVal.value + block_modelmodel1.node.width.animVal.value,
    y2: Number(text_modelmodel1.node.attributes.y.nodeValue) + 5,
    stroke: "#1f2c39",
    strokeWidth: 1,
    strokeLinecap: "round"
});

//line extend line from current model and attach to related model in hasAndBelongsToMany relation...
var modelToModel1Path = "M " + (block_modelmodel1.node.x.animVal.value + block_modelmodel1.node.width.animVal.value + 100)  + " "  + (block_model.node.y.animVal.value + 60)+ "V " + (block_model1_hasAndBelongsToMany0.node.y.animVal.value + 60) + "H " + (block_model1_hasAndBelongsToMany0.node.x.animVal.value);
var modelToModel1 = model.path(modelToModel1Path);
modelToModel1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray' : 5
})

//line and arrows from current model toward linked model of hasAndBelongsToMany relation

var modelTomodelModel1Path = "M " + (block_model.node.x.animVal.value + block_model.node.width.animVal.value + 100) + " " + (block_model.node.y.animVal.value + 50) + "V " +  (block_modelmodel1.node.y.animVal.value + 50) + "H " +  (block_modelmodel1.node.x.animVal.value); 


var modelTomodelModel1 = model.path(modelTomodelModel1Path);
modelTomodelModel1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1
})
//polygon {Arrow at end of line toward related model}
var modelTomodelModel1ArrowPoints = [block_modelmodel1.node.x.animVal.value,(block_modelmodel1.node.y.animVal.value+50),(block_modelmodel1.node.x.animVal.value-10),(block_modelmodel1.node.y.animVal.value+50-10),(block_modelmodel1.node.x.animVal.value-10),(block_modelmodel1.node.y.animVal.value+50+10)];
var modelTomodelModel1Arrow = model.polygon(modelTomodelModel1ArrowPoints);
modelTomodelModel1Arrow.attr({
    fill: "#1f2c39",
    stroke: "#1f2c39",
    strokeWidth: 1,
});

//line and arrows from 2nd model toward linked model of hasAndBelongsToMany relation
var Model1TomodelModel1Path = "M " + (block_model1_hasAndBelongsToMany0.node.x.animVal.value) + " " + (block_model1_hasAndBelongsToMany0.node.y.animVal.value + 50) + "H " + (block_modelmodel1.node.x.animVal.value + block_modelmodel1.node.width.animVal.value);

var Model1TomodelModel1 = model.path(Model1TomodelModel1Path);
Model1TomodelModel1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1
})
//polygon {Arrow at end of line toward related model}
var Model1TomodelModel1ArrowPoints = [(block_modelmodel1.node.x.animVal.value + block_modelmodel1.node.width.animVal.value) , (block_modelmodel1.node.y.animVal.value + 50) , (block_modelmodel1.node.x.animVal.value + block_modelmodel1.node.width.animVal.value + 10) , (block_modelmodel1.node.y.animVal.value + 50 +10) , (block_modelmodel1.node.x.animVal.value + block_modelmodel1.node.width.animVal.value + 10) , (block_modelmodel1.node.y.animVal.value + 50 - 10)];
var Model1TomodelModel1Arrow = model.polygon(Model1TomodelModel1ArrowPoints);
Model1TomodelModel1Arrow.attr({
    fill: "#1f2c39",
    stroke: "#1f2c39",
    strokeWidth: 1,
});



var model2_hasAndBelongsToMany1 = Snap("#model");

//modal rectangle...
var drag_title_model2_hasAndBelongsToMany1 = Snap.parse('<title>Drag and Drop here related model if exist for generate relation inside form</title>');

var block_model2_hasAndBelongsToMany1 = model2_hasAndBelongsToMany1.rect(20, 20, 150, 100, 5, 5);
block_model2_hasAndBelongsToMany1.attr({
    x: (block_model.node.x.animVal.value + block_model.node.width.animVal.value + 570),
    width : (block_model.node.width.animVal.value),
    fill: "rgb(236, 240, 241)",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray': 5 
});


    block_model2_hasAndBelongsToMany1.attr({
        y: (block_model1_hasAndBelongsToMany0.node.y.animVal.value + block_model1_hasAndBelongsToMany0.node.height.animVal.value + 80)
    });

block_model2_hasAndBelongsToMany1.append(drag_title_model2_hasAndBelongsToMany1);


//modal text populate inside modal rect...
var text_model2_hasAndBelongsToMany1 = model2_hasAndBelongsToMany1.text(0, 0, "MODEL2!");
text_model2_hasAndBelongsToMany1.attr({
    x: block_model2_hasAndBelongsToMany1.node.x.animVal.value + 10,
    y: block_model2_hasAndBelongsToMany1.node.y.animVal.value + 20,
    'font-size': 13
});


// line separates modal head and body...
var line_model2_hasAndBelongsToMany1 = model2_hasAndBelongsToMany1.line(0, 0, 0, 0);
line_model2_hasAndBelongsToMany1.attr({
    x1: block_model2_hasAndBelongsToMany1.node.x.animVal.value,
    y1: Number(text_model2_hasAndBelongsToMany1.node.attributes.y.nodeValue) + 5,
    x2: block_model2_hasAndBelongsToMany1.node.x.animVal.value + block_model2_hasAndBelongsToMany1.node.width.animVal.value,
    y2: Number(text_model2_hasAndBelongsToMany1.node.attributes.y.nodeValue) + 5,
    stroke: "#1f2c39",
    strokeWidth: 1,
    strokeLinecap: "round"
});

// change coordinates of line and mode1_rect according to text
/*<!--block_model2_hasAndBelongsToMany1.attr({
    width: Number(text_model2_hasAndBelongsToMany1.node.attributes.x.value) + (Number(text_model2_hasAndBelongsToMany1.node.textContent.length) * 10 + 30)
});
line_model2_hasAndBelongsToMany1.attr({
    x2: (block_model2_hasAndBelongsToMany1.node.width.animVal.value + block_model2_hasAndBelongsToMany1.node.x.animVal.value)
})-->*/

//tooltip on checkbox...
var select_title_model2_hasAndBelongsToMany1 = Snap.parse('<title>Click here to select model for CRUD Operations , if unchecked Crud form are not created</title>');

//select box checked when modal form is created
var select_model2_hasAndBelongsToMany1 = model2_hasAndBelongsToMany1.rect(0, 0, 15, 15, 2, 2);
select_model2_hasAndBelongsToMany1.attr({
    x: (block_model2_hasAndBelongsToMany1.node.width.animVal.value + block_model2_hasAndBelongsToMany1.node.x.animVal.value - 10),
    y: (block_model2_hasAndBelongsToMany1.node.y.animVal.value - 10),
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 2
});
select_model2_hasAndBelongsToMany1.append(select_title_model2_hasAndBelongsToMany1);

//check symbol inside select box...
var tick_path_model2_hasAndBelongsToMany1 = "M " + (select_model2_hasAndBelongsToMany1.node.x.animVal.value + 3) + " " + (select_model2_hasAndBelongsToMany1.node.y.animVal.value + 5) + "L " + (select_model2_hasAndBelongsToMany1.node.x.animVal.value + 7) + " " + (select_model2_hasAndBelongsToMany1.node.y.animVal.value + 10) + "L " + (select_model2_hasAndBelongsToMany1.node.x.animVal.value + select_model2_hasAndBelongsToMany1.node.width.animVal.value) + " " + (select_model2_hasAndBelongsToMany1.node.y.animVal.value - 3);
var tick_model2_hasAndBelongsToMany1 = model2_hasAndBelongsToMany1.path(tick_path_model2_hasAndBelongsToMany1)
tick_model2_hasAndBelongsToMany1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

//check and uncheck function on checkbox...
var checked_model2_hasAndBelongsToMany1 = false;
var selectCheckBox_model2_hasAndBelongsToMany1 = function () {
    if (!checked_model2_hasAndBelongsToMany1) {
        crud_opt_group_model2_hasAndBelongsToMany1.attr({
            'display': 'block'
        })
        tick_model2_hasAndBelongsToMany1.attr({ display : "block"});
        block_model2_hasAndBelongsToMany1.attr({ x : (block_model.node.x.animVal.value + block_model.node.width.animVal.value + 570)});
        checked_model2_hasAndBelongsToMany1 = true;
    } else if (checked_model2_hasAndBelongsToMany1) {
        crud_opt_group_model2_hasAndBelongsToMany1.attr({
            'display': 'none'
        })
        tick_model2_hasAndBelongsToMany1.attr({ display : "none"});
        checked_model2_hasAndBelongsToMany1 = false;
    }
};
select_model2_hasAndBelongsToMany1.click(selectCheckBox_model2_hasAndBelongsToMany1);
tick_model2_hasAndBelongsToMany1.click(selectCheckBox_model2_hasAndBelongsToMany1);

//Crud Rect...
var crud_opt_model2_hasAndBelongsToMany1 = model2_hasAndBelongsToMany1.rect(0, 0, 80, 90, 5, 5);
crud_opt_model2_hasAndBelongsToMany1.attr({
    x: (select_model2_hasAndBelongsToMany1.node.x.animVal.value + 15),
    y: (select_model2_hasAndBelongsToMany1.node.y.animVal.value + 20),
    fill: "white",
    stroke: "#1f2c39",
    'stroke-dasharray': 10
})

//Crud options inside Crud_opt rect...
var create_model2_hasAndBelongsToMany1 = model2_hasAndBelongsToMany1.text(0, 0, "-   create");
create_model2_hasAndBelongsToMany1.attr({
    x: (crud_opt_model2_hasAndBelongsToMany1.node.x.animVal.value + 5),
    y: (crud_opt_model2_hasAndBelongsToMany1.node.y.animVal.value + 20),
    'font-size': 15
});
var listing_model2_hasAndBelongsToMany1 = model2_hasAndBelongsToMany1.text(0, 0, "-   Listing");
listing_model2_hasAndBelongsToMany1.attr({
    x: (crud_opt_model2_hasAndBelongsToMany1.node.x.animVal.value + 5),
    y: (crud_opt_model2_hasAndBelongsToMany1.node.y.animVal.value + 40),
    'font-size': 15
});
var update_model2_hasAndBelongsToMany1 = model2_hasAndBelongsToMany1.text(0, 0, "-   update");
update_model2_hasAndBelongsToMany1.attr({
    x: (crud_opt_model2_hasAndBelongsToMany1.node.x.animVal.value + 5),
    y: (crud_opt_model2_hasAndBelongsToMany1.node.y.animVal.value + 60),
    'font-size': 15
});
var deleate_model2_hasAndBelongsToMany1 = model2_hasAndBelongsToMany1.text(0, 0, "-   delete");
deleate_model2_hasAndBelongsToMany1.attr({
    x: (crud_opt_model2_hasAndBelongsToMany1.node.x.animVal.value + 5),
    y: (crud_opt_model2_hasAndBelongsToMany1.node.y.animVal.value + 80),
    'font-size': 15
});

//check and uncheck Crud options functions...
var createCheckBoxClicked_model2_hasAndBelongsToMany1 = false;
var createCheckBoxClick_model2_hasAndBelongsToMany1 = function () {
    if (!createCheckBoxClicked_model2_hasAndBelongsToMany1) {
        create_tick_model2_hasAndBelongsToMany1.attr({
            display: "block"
        });
        createCheckBoxClicked_model2_hasAndBelongsToMany1 = true;
    } else if (createCheckBoxClicked_model2_hasAndBelongsToMany1) {
        create_tick_model2_hasAndBelongsToMany1.attr({
            display: "none"
        });
        createCheckBoxClicked_model2_hasAndBelongsToMany1 = false;
    }
}

//listing check all three remaining options include listing , delete , edit
var listingCheckBoxClicked_model2_hasAndBelongsToMany1 = false;
var listingCheckBoxClick_model2_hasAndBelongsToMany1 = function () {
    if (!listingCheckBoxClicked_model2_hasAndBelongsToMany1) {
        listing_tick_model2_hasAndBelongsToMany1.attr({
            display: "block"
        });
        update_tick_model2_hasAndBelongsToMany1.attr({
            display: "block"
        });
        deleate_tick_model2_hasAndBelongsToMany1.attr({
            display: "block"
        });
        listingCheckBoxClicked_model2_hasAndBelongsToMany1 = true;
    } else if (listingCheckBoxClicked_model2_hasAndBelongsToMany1) {
        listing_tick_model2_hasAndBelongsToMany1.attr({
            display: "none"
        });
        update_tick_model2_hasAndBelongsToMany1.attr({
            display: "none"
        });
        deleate_tick_model2_hasAndBelongsToMany1.attr({
            display: "none"
        });
        listingCheckBoxClicked_model2_hasAndBelongsToMany1 = false;
    }
}

//now set checkboxes on front of Crud operations...
var createCheckBox_model2_hasAndBelongsToMany1 = model2_hasAndBelongsToMany1.rect(0, 0, 12, 12, 1, 1);
createCheckBox_model2_hasAndBelongsToMany1.attr({
    x: (Number(create_model2_hasAndBelongsToMany1.node.attributes.x.nodeValue) + 60),
    y: (create_model2_hasAndBelongsToMany1.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
createCheckBox_model2_hasAndBelongsToMany1.click(createCheckBoxClick_model2_hasAndBelongsToMany1);
var listingCheckBox_model2_hasAndBelongsToMany1 = model2_hasAndBelongsToMany1.rect(0, 0, 12, 12, 1, 1);
listingCheckBox_model2_hasAndBelongsToMany1.attr({
    x: (Number(listing_model2_hasAndBelongsToMany1.node.attributes.x.nodeValue) + 60),
    y: (listing_model2_hasAndBelongsToMany1.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
listingCheckBox_model2_hasAndBelongsToMany1.click(listingCheckBoxClick_model2_hasAndBelongsToMany1);
var updateCheckBox_model2_hasAndBelongsToMany1 = model2_hasAndBelongsToMany1.rect(0, 0, 12, 12, 1, 1);
updateCheckBox_model2_hasAndBelongsToMany1.attr({
    x: (Number(update_model2_hasAndBelongsToMany1.node.attributes.x.nodeValue) + 60),
    y: (update_model2_hasAndBelongsToMany1.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
updateCheckBox_model2_hasAndBelongsToMany1.click(listingCheckBoxClick_model2_hasAndBelongsToMany1);
var deleateCheckBox_model2_hasAndBelongsToMany1 = model2_hasAndBelongsToMany1.rect(0, 0, 12, 12, 1, 1);
deleateCheckBox_model2_hasAndBelongsToMany1.attr({
    x: (Number(deleate_model2_hasAndBelongsToMany1.node.attributes.x.nodeValue) + 60),
    y: (deleate_model2_hasAndBelongsToMany1.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
deleateCheckBox_model2_hasAndBelongsToMany1.click(listingCheckBoxClick_model2_hasAndBelongsToMany1);

//tick inside create check_box...
var create_tick_path_model2_hasAndBelongsToMany1 = "M " + (createCheckBox_model2_hasAndBelongsToMany1.node.x.animVal.value + 1) + " " + (createCheckBox_model2_hasAndBelongsToMany1.node.y.animVal.value + 6) + "L " + (createCheckBox_model2_hasAndBelongsToMany1.node.x.animVal.value + 5) + " " + (createCheckBox_model2_hasAndBelongsToMany1.node.y.animVal.value + 10) + "L " + (createCheckBox_model2_hasAndBelongsToMany1.node.x.animVal.value + createCheckBox_model2_hasAndBelongsToMany1.node.width.animVal.value) + " " + (createCheckBox_model2_hasAndBelongsToMany1.node.y.animVal.value - 2);
var create_tick_model2_hasAndBelongsToMany1 = model2_hasAndBelongsToMany1.path(create_tick_path_model2_hasAndBelongsToMany1);
create_tick_model2_hasAndBelongsToMany1.click(createCheckBoxClick_model2_hasAndBelongsToMany1);
create_tick_model2_hasAndBelongsToMany1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside listing check_box...
var listing_tick_path_model2_hasAndBelongsToMany1 = "M " + (listingCheckBox_model2_hasAndBelongsToMany1.node.x.animVal.value + 1) + " " + (listingCheckBox_model2_hasAndBelongsToMany1.node.y.animVal.value + 6) + "L " + (listingCheckBox_model2_hasAndBelongsToMany1.node.x.animVal.value + 5) + " " + (listingCheckBox_model2_hasAndBelongsToMany1.node.y.animVal.value + 10) + "L " + (listingCheckBox_model2_hasAndBelongsToMany1.node.x.animVal.value + listingCheckBox_model2_hasAndBelongsToMany1.node.width.animVal.value) + " " + (listingCheckBox_model2_hasAndBelongsToMany1.node.y.animVal.value - 2);
var listing_tick_model2_hasAndBelongsToMany1 = model2_hasAndBelongsToMany1.path(listing_tick_path_model2_hasAndBelongsToMany1);
listing_tick_model2_hasAndBelongsToMany1.click(listingCheckBoxClick_model2_hasAndBelongsToMany1);
listing_tick_model2_hasAndBelongsToMany1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var update_tick_path_model2_hasAndBelongsToMany1 = "M " + (updateCheckBox_model2_hasAndBelongsToMany1.node.x.animVal.value + 1) + " " + (updateCheckBox_model2_hasAndBelongsToMany1.node.y.animVal.value + 6) + "L " + (updateCheckBox_model2_hasAndBelongsToMany1.node.x.animVal.value + 5) + " " + (updateCheckBox_model2_hasAndBelongsToMany1.node.y.animVal.value + 10) + "L " + (updateCheckBox_model2_hasAndBelongsToMany1.node.x.animVal.value + updateCheckBox_model2_hasAndBelongsToMany1.node.width.animVal.value) + " " + (updateCheckBox_model2_hasAndBelongsToMany1.node.y.animVal.value - 2);
var update_tick_model2_hasAndBelongsToMany1 = model2_hasAndBelongsToMany1.path(update_tick_path_model2_hasAndBelongsToMany1);
update_tick_model2_hasAndBelongsToMany1.click(listingCheckBoxClick_model2_hasAndBelongsToMany1);
update_tick_model2_hasAndBelongsToMany1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var deleate_tick_path_model2_hasAndBelongsToMany1 = "M " + (deleateCheckBox_model2_hasAndBelongsToMany1.node.x.animVal.value + 1) + " " + (deleateCheckBox_model2_hasAndBelongsToMany1.node.y.animVal.value + 6) + "L " + (deleateCheckBox_model2_hasAndBelongsToMany1.node.x.animVal.value + 5) + " " + (deleateCheckBox_model2_hasAndBelongsToMany1.node.y.animVal.value + 10) + "L " + (deleateCheckBox_model2_hasAndBelongsToMany1.node.x.animVal.value + deleateCheckBox_model2_hasAndBelongsToMany1.node.width.animVal.value) + " " + (deleateCheckBox_model2_hasAndBelongsToMany1.node.y.animVal.value - 2);
var deleate_tick_model2_hasAndBelongsToMany1 = model2_hasAndBelongsToMany1.path(deleate_tick_path_model2_hasAndBelongsToMany1);
deleate_tick_model2_hasAndBelongsToMany1.click(listingCheckBoxClick_model2_hasAndBelongsToMany1);
deleate_tick_model2_hasAndBelongsToMany1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

var crud_opt_group_model2_hasAndBelongsToMany1 = model2_hasAndBelongsToMany1.group(crud_opt_model2_hasAndBelongsToMany1, create_model2_hasAndBelongsToMany1, listing_model2_hasAndBelongsToMany1, update_model2_hasAndBelongsToMany1, deleate_model2_hasAndBelongsToMany1, createCheckBox_model2_hasAndBelongsToMany1, listingCheckBox_model2_hasAndBelongsToMany1, updateCheckBox_model2_hasAndBelongsToMany1, deleateCheckBox_model2_hasAndBelongsToMany1, create_tick_model2_hasAndBelongsToMany1, listing_tick_model2_hasAndBelongsToMany1, update_tick_model2_hasAndBelongsToMany1, deleate_tick_model2_hasAndBelongsToMany1);
crud_opt_group_model2_hasAndBelongsToMany1.attr({
    'display': 'none'
})


var modelmodel2 = Snap("#model");

//modal rectangle...
var drag_title_modelmodel2 = Snap.parse('<title>Drag and Drop here related model if exist for generate relation inside form</title>');

var block_modelmodel2 = modelmodel2.rect(20, 20, 150, 100, 5, 5);
block_modelmodel2.attr({
    x: (block_model.node.x.animVal.value + block_model.node.width.animVal.value + 200),
    width : (block_model.node.width.animVal.value),
    fill: "rgb(217, 202, 238)",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray': 5 
});


    block_modelmodel2.attr({
        y: (block_model1_hasAndBelongsToMany0.node.y.animVal.value + block_model1_hasAndBelongsToMany0.node.height.animVal.value + 80)
    });

block_modelmodel2.append(drag_title_modelmodel2);

//modal text populate inside modal rect...
var text_modelmodel2 = modelmodel2.text(0, 0, "modelMODEL2!");
text_modelmodel2.attr({
    x: block_modelmodel2.node.x.animVal.value + 10,
    y: block_modelmodel2.node.y.animVal.value + 20,
    'font-size': 13
});


// line separates modal head and body...
var line_modelmodel2 = modelmodel2.line(0, 0, 0, 0);
line_modelmodel2.attr({
    x1: block_modelmodel2.node.x.animVal.value,
    y1: Number(text_modelmodel2.node.attributes.y.nodeValue) + 5,
    x2: block_modelmodel2.node.x.animVal.value + block_modelmodel2.node.width.animVal.value,
    y2: Number(text_modelmodel2.node.attributes.y.nodeValue) + 5,
    stroke: "#1f2c39",
    strokeWidth: 1,
    strokeLinecap: "round"
});

//line extend line from current model and attach to related model in hasAndBelongsToMany relation...
var modelToModel2Path = "M " + (block_modelmodel2.node.x.animVal.value + block_modelmodel2.node.width.animVal.value + 100)  + " "  + (block_model.node.y.animVal.value + 60)+ "V " + (block_model2_hasAndBelongsToMany1.node.y.animVal.value + 60) + "H " + (block_model2_hasAndBelongsToMany1.node.x.animVal.value);
var modelToModel2 = model.path(modelToModel2Path);
modelToModel2.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray' : 5
})

//line and arrows from current model toward linked model of hasAndBelongsToMany relation

var modelTomodelModel2Path = "M " + (block_model.node.x.animVal.value + block_model.node.width.animVal.value + 100) + " " + (block_modelmodel1.node.y.animVal.value + 50) + "V " +  (block_modelmodel2.node.y.animVal.value + 50) + "H " +  (block_modelmodel2.node.x.animVal.value); 


var modelTomodelModel2 = model.path(modelTomodelModel2Path);
modelTomodelModel2.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1
})
//polygon {Arrow at end of line toward related model}
var modelTomodelModel2ArrowPoints = [block_modelmodel2.node.x.animVal.value,(block_modelmodel2.node.y.animVal.value+50),(block_modelmodel2.node.x.animVal.value-10),(block_modelmodel2.node.y.animVal.value+50-10),(block_modelmodel2.node.x.animVal.value-10),(block_modelmodel2.node.y.animVal.value+50+10)];
var modelTomodelModel2Arrow = model.polygon(modelTomodelModel2ArrowPoints);
modelTomodelModel2Arrow.attr({
    fill: "#1f2c39",
    stroke: "#1f2c39",
    strokeWidth: 1,
});

//line and arrows from 2nd model toward linked model of hasAndBelongsToMany relation
var Model2TomodelModel2Path = "M " + (block_model2_hasAndBelongsToMany1.node.x.animVal.value) + " " + (block_model2_hasAndBelongsToMany1.node.y.animVal.value + 50) + "H " + (block_modelmodel2.node.x.animVal.value + block_modelmodel2.node.width.animVal.value);

var Model2TomodelModel2 = model.path(Model2TomodelModel2Path);
Model2TomodelModel2.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1
})
//polygon {Arrow at end of line toward related model}
var Model2TomodelModel2ArrowPoints = [(block_modelmodel2.node.x.animVal.value + block_modelmodel2.node.width.animVal.value) , (block_modelmodel2.node.y.animVal.value + 50) , (block_modelmodel2.node.x.animVal.value + block_modelmodel2.node.width.animVal.value + 10) , (block_modelmodel2.node.y.animVal.value + 50 +10) , (block_modelmodel2.node.x.animVal.value + block_modelmodel2.node.width.animVal.value + 10) , (block_modelmodel2.node.y.animVal.value + 50 - 10)];
var Model2TomodelModel2Arrow = model.polygon(Model2TomodelModel2ArrowPoints);
Model2TomodelModel2Arrow.attr({
    fill: "#1f2c39",
    stroke: "#1f2c39",
    strokeWidth: 1,
});

//get access to id
var order1 = Snap("#order1");

//modal rectangle...
var drag_title_order1 = Snap.parse('<title>Drag and Drop here related model if exist for generate relation inside form</title>');

var block_order1 = order1.rect(20, 20, 150, 100, 5, 5);
block_order1.attr({
    fill: "rgb(236, 240, 241)",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray': 5
});
block_order1.append(drag_title_order1);

//modal text populate inside modal rect...
var text_order1 = order1.text(0, 0, "ORDER1!");
text_order1.attr({
    x: block_order1.node.x.animVal.value + 10,
    y: block_order1.node.y.animVal.value + 20,
    'font-size': 13
});
// line separates modal head and body...
var line_order1 = order1.line(0, 0, 0, 0);
line_order1.attr({
    x1: block_order1.node.x.animVal.value,
    y1: Number(text_order1.node.attributes.y.nodeValue) + 5,
    x2: block_order1.node.x.animVal.value + block_order1.node.width.animVal.value,
    y2: Number(text_order1.node.attributes.y.nodeValue) + 5,
    stroke: "#1f2c39",
    strokeWidth: 1,
    strokeLinecap: "round"
});

// change coordinates of line and mode1_rect according to text
/*block_order1.attr({
    width: Number(text_order1.node.attributes.x.value) + (Number(text_order1.node.textContent.length) * 10 + 30)
});
line_order1.attr({
    x2: (block_order1.node.width.animVal.value + block_order1.node.x.animVal.value)
})*/

//tooltip on checkbox...
var select_title_order1 = Snap.parse('<title>Click here to select model for CRUD Operations , if unchecked Crud form are not created</title>');

//select box checked when modal form is created
var select_order1 = order1.rect(0, 0, 15, 15, 2, 2);
select_order1.attr({
    x: (block_order1.node.width.animVal.value + block_order1.node.x.animVal.value - 10),
    y: (block_order1.node.y.animVal.value - 10),
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 2
});
select_order1.append(select_title_order1);

//check symbol inside select box...
var tick_path_order1 = "M " + (select_order1.node.x.animVal.value + 3) + " " + (select_order1.node.y.animVal.value + 5) + "L " + (select_order1.node.x.animVal.value + 7) + " " + (select_order1.node.y.animVal.value + 10) + "L " + (select_order1.node.x.animVal.value + select_order1.node.width.animVal.value) + " " + (select_order1.node.y.animVal.value - 3);
var tick_order1 = order1.path(tick_path_order1)
tick_order1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

//check and uncheck function on checkbox...
var checked_order1 = false;
var selectCheckBox_order1 = function () {
    if (!checked_order1) {
        //  crud_opt_group.removeClass('animated bounceOutUp')
        crud_opt_group_order1.attr({
            'display': 'block'
        })

        tick_order1.attr({ display : "block"});
        // crud_opt_group_order1.addClass('animated bounceInUp');
        checked_order1 = true;
    } else if (checked_order1) {
        crud_opt_group_order1.attr({
            'display': 'none'
        })
        tick_order1.attr({ display : "none"});
        // crud_opt_group.removeClass('animated bounceInUp');
        // crud_opt_group.addClass('animated bounceOutUp')
        checked_order1 = false;
    }
};
select_order1.click(selectCheckBox_order1);
tick_order1.click(selectCheckBox_order1);

//Crud Rect...
var crud_opt_order1 = order1.rect(0, 0, 80, 90, 5, 5);
crud_opt_order1.attr({
    x: (select_order1.node.x.animVal.value + 15),
    y: (select_order1.node.y.animVal.value + 20),
    fill: "white",
    stroke: "#1f2c39",
    'stroke-dasharray': 10
})

//Crud options inside Crud_opt rect...
var create_order1 = order1.text(0, 0, "-   create");
create_order1.attr({
    x: (crud_opt_order1.node.x.animVal.value + 5),
    y: (crud_opt_order1.node.y.animVal.value + 20),
    'font-size': 15
});
var listing_order1 = order1.text(0, 0, "-   Listing");
listing_order1.attr({
    x: (crud_opt_order1.node.x.animVal.value + 5),
    y: (crud_opt_order1.node.y.animVal.value + 40),
    'font-size': 15
});
var update_order1 = order1.text(0, 0, "-   update");
update_order1.attr({
    x: (crud_opt_order1.node.x.animVal.value + 5),
    y: (crud_opt_order1.node.y.animVal.value + 60),
    'font-size': 15
});
var deleate_order1 = order1.text(0, 0, "-   delete");
deleate_order1.attr({
    x: (crud_opt_order1.node.x.animVal.value + 5),
    y: (crud_opt_order1.node.y.animVal.value + 80),
    'font-size': 15
});

//check and uncheck Crud options functions...
var createCheckBoxClicked_order1 = false;
var createCheckBoxClick_order1 = function () {
    if (!createCheckBoxClicked_order1) {
        create_tick_order1.attr({
            display: "block"
        });
        createCheckBoxClicked_order1 = true;
    } else if (createCheckBoxClicked_order1) {
        create_tick_order1.attr({
            display: "none"
        });
        createCheckBoxClicked_order1 = false;
    }
}

//listing check all three remaining options include listing , delete , edit
var listingCheckBoxClicked_order1 = false;
var listingCheckBoxClick_order1 = function () {
    if (!listingCheckBoxClicked_order1) {
        listing_tick_order1.attr({
            display: "block"
        });
        update_tick_order1.attr({
            display: "block"
        });
        deleate_tick_order1.attr({
            display: "block"
        });
        listingCheckBoxClicked_order1 = true;
    } else if (listingCheckBoxClicked_order1) {
        listing_tick_order1.attr({
            display: "none"
        });
        update_tick_order1.attr({
            display: "none"
        });
        deleate_tick_order1.attr({
            display: "none"
        });
        listingCheckBoxClicked_order1 = false;
    }
}

//now set checkboxes on front of Crud operations...
var createCheckBox_order1 = order1.rect(0, 0, 12, 12, 1, 1);
createCheckBox_order1.attr({
    x: (Number(create_order1.node.attributes.x.nodeValue) + 60),
    y: (create_order1.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
createCheckBox_order1.click(createCheckBoxClick_order1);
var listingCheckBox_order1 = order1.rect(0, 0, 12, 12, 1, 1);
listingCheckBox_order1.attr({
    x: (Number(listing_order1.node.attributes.x.nodeValue) + 60),
    y: (listing_order1.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
listingCheckBox_order1.click(listingCheckBoxClick_order1);
var updateCheckBox_order1 = order1.rect(0, 0, 12, 12, 1, 1);
updateCheckBox_order1.attr({
    x: (Number(update_order1.node.attributes.x.nodeValue) + 60),
    y: (update_order1.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
updateCheckBox_order1.click(listingCheckBoxClick_order1);
var deleateCheckBox_order1 = order1.rect(0, 0, 12, 12, 1, 1);
deleateCheckBox_order1.attr({
    x: (Number(deleate_order1.node.attributes.x.nodeValue) + 60),
    y: (deleate_order1.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
deleateCheckBox_order1.click(listingCheckBoxClick_order1);

//tick inside create check_box...
var create_tick_path_order1 = "M " + (createCheckBox_order1.node.x.animVal.value + 1) + " " + (createCheckBox_order1.node.y.animVal.value + 6) + "L " + (createCheckBox_order1.node.x.animVal.value + 5) + " " + (createCheckBox_order1.node.y.animVal.value + 10) + "L " + (createCheckBox_order1.node.x.animVal.value + createCheckBox_order1.node.width.animVal.value) + " " + (createCheckBox_order1.node.y.animVal.value - 2);
var create_tick_order1 = order1.path(create_tick_path_order1);
create_tick_order1.click(createCheckBoxClick_order1);
create_tick_order1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside listing check_box...
var listing_tick_path_order1 = "M " + (listingCheckBox_order1.node.x.animVal.value + 1) + " " + (listingCheckBox_order1.node.y.animVal.value + 6) + "L " + (listingCheckBox_order1.node.x.animVal.value + 5) + " " + (listingCheckBox_order1.node.y.animVal.value + 10) + "L " + (listingCheckBox_order1.node.x.animVal.value + listingCheckBox_order1.node.width.animVal.value) + " " + (listingCheckBox_order1.node.y.animVal.value - 2);
var listing_tick_order1 = order1.path(listing_tick_path_order1);
listing_tick_order1.click(listingCheckBoxClick_order1);
listing_tick_order1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var update_tick_path_order1 = "M " + (updateCheckBox_order1.node.x.animVal.value + 1) + " " + (updateCheckBox_order1.node.y.animVal.value + 6) + "L " + (updateCheckBox_order1.node.x.animVal.value + 5) + " " + (updateCheckBox_order1.node.y.animVal.value + 10) + "L " + (updateCheckBox_order1.node.x.animVal.value + updateCheckBox_order1.node.width.animVal.value) + " " + (updateCheckBox_order1.node.y.animVal.value - 2);
var update_tick_order1 = order1.path(update_tick_path_order1);
update_tick_order1.click(listingCheckBoxClick_order1);
update_tick_order1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var deleate_tick_path_order1 = "M " + (deleateCheckBox_order1.node.x.animVal.value + 1) + " " + (deleateCheckBox_order1.node.y.animVal.value + 6) + "L " + (deleateCheckBox_order1.node.x.animVal.value + 5) + " " + (deleateCheckBox_order1.node.y.animVal.value + 10) + "L " + (deleateCheckBox_order1.node.x.animVal.value + deleateCheckBox_order1.node.width.animVal.value) + " " + (deleateCheckBox_order1.node.y.animVal.value - 2);
var deleate_tick_order1 = order1.path(deleate_tick_path_order1);
deleate_tick_order1.click(listingCheckBoxClick_order1);
deleate_tick_order1.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

var crud_opt_group_order1 = order1.group(crud_opt_order1, create_order1, listing_order1, update_order1, deleate_order1, createCheckBox_order1, listingCheckBox_order1, updateCheckBox_order1, deleateCheckBox_order1, create_tick_order1, listing_tick_order1, update_tick_order1, deleate_tick_order1);
crud_opt_group_order1.attr({
    'display': 'none'
})
//relative modals svg...

//get access to id
var patient = Snap("#patient");

//modal rectangle...
var drag_title_patient = Snap.parse('<title>Drag and Drop here related model if exist for generate relation inside form</title>');

var block_patient = patient.rect(20, 20, 150, 100, 5, 5);
block_patient.attr({
    fill: "rgb(236, 240, 241)",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray': 5
});
block_patient.append(drag_title_patient);

var patient_rel_path = "M " + (block_patient.node.x.animVal.value + block_patient.node.width.animVal.value ) + " " + (block_patient.node.y.animVal.value + 50) + "H " + (block_patient.node.x.animVal.value + block_patient.node.width.animVal.value + 100);
var patient_rel_path_half = patient.path(patient_rel_path);
patient_rel_path_half.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1
});

    var patient_rel_path_linkModel = "M " + (block_patient.node.x.animVal.value + block_patient.node.width.animVal.value ) + " " + (block_patient.node.y.animVal.value + 60) + "H " + (block_patient.node.x.animVal.value + block_patient.node.width.animVal.value + 450);        
    var patient_rel_path_half_LinkModel = patient.path(patient_rel_path_linkModel);
    patient_rel_path_half_LinkModel.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray' : 5
});


//modal text populate inside modal rect...
var text_patient = patient.text(0, 0, "PATIENT!");
text_patient.attr({
    x: block_patient.node.x.animVal.value + 10,
    y: block_patient.node.y.animVal.value + 20,
    'font-size': 13
});
// line separates modal head and body...
var line_patient = patient.line(0, 0, 0, 0);
line_patient.attr({
    x1: block_patient.node.x.animVal.value,
    y1: Number(text_patient.node.attributes.y.nodeValue) + 5,
    x2: block_patient.node.x.animVal.value + block_patient.node.width.animVal.value,
    y2: Number(text_patient.node.attributes.y.nodeValue) + 5,
    stroke: "#1f2c39",
    strokeWidth: 1,
    strokeLinecap: "round"
});

// change coordinates of line and mode1_rect according to text
/*block_patient.attr({
    width: Number(text_patient.node.attributes.x.value) + (Number(text_patient.node.textContent.length) * 10 + 30)
});
line_patient.attr({
    x2: (block_patient.node.width.animVal.value + block_patient.node.x.animVal.value)
})*/

//tooltip on checkbox...
var select_title_patient = Snap.parse('<title>Click here to select model for CRUD Operations , if unchecked Crud form are not created</title>');

//select box checked when modal form is created
var select_patient = patient.rect(0, 0, 15, 15, 2, 2);
select_patient.attr({
    x: (block_patient.node.width.animVal.value + block_patient.node.x.animVal.value - 10),
    y: (block_patient.node.y.animVal.value - 10),
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 2
});
select_patient.append(select_title_patient);

//check symbol inside select box...
var tick_path_patient = "M " + (select_patient.node.x.animVal.value + 3) + " " + (select_patient.node.y.animVal.value + 5) + "L " + (select_patient.node.x.animVal.value + 7) + " " + (select_patient.node.y.animVal.value + 10) + "L " + (select_patient.node.x.animVal.value + select_patient.node.width.animVal.value) + " " + (select_patient.node.y.animVal.value - 3);
var tick_patient = patient.path(tick_path_patient)
tick_patient.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

//check and uncheck function on checkbox...
var checked_patient = false;
var selectCheckBox_patient = function () {
    if (!checked_patient) {
        //  crud_opt_group.removeClass('animated bounceOutUp')
        crud_opt_group_patient.attr({
            'display': 'block'
        })

        tick_patient.attr({ display : "block"});
        // crud_opt_group_patient.addClass('animated bounceInUp');
        checked_patient = true;
    } else if (checked_patient) {
        crud_opt_group_patient.attr({
            'display': 'none'
        })
        tick_patient.attr({ display : "none"});
        // crud_opt_group.removeClass('animated bounceInUp');
        // crud_opt_group.addClass('animated bounceOutUp')
        checked_patient = false;
    }
};
select_patient.click(selectCheckBox_patient);
tick_patient.click(selectCheckBox_patient);

//Crud Rect...
var crud_opt_patient = patient.rect(0, 0, 80, 90, 5, 5);
crud_opt_patient.attr({
    x: (select_patient.node.x.animVal.value + 15),
    y: (select_patient.node.y.animVal.value + 20),
    fill: "white",
    stroke: "#1f2c39",
    'stroke-dasharray': 10
})

//Crud options inside Crud_opt rect...
var create_patient = patient.text(0, 0, "-   create");
create_patient.attr({
    x: (crud_opt_patient.node.x.animVal.value + 5),
    y: (crud_opt_patient.node.y.animVal.value + 20),
    'font-size': 15
});
var listing_patient = patient.text(0, 0, "-   Listing");
listing_patient.attr({
    x: (crud_opt_patient.node.x.animVal.value + 5),
    y: (crud_opt_patient.node.y.animVal.value + 40),
    'font-size': 15
});
var update_patient = patient.text(0, 0, "-   update");
update_patient.attr({
    x: (crud_opt_patient.node.x.animVal.value + 5),
    y: (crud_opt_patient.node.y.animVal.value + 60),
    'font-size': 15
});
var deleate_patient = patient.text(0, 0, "-   delete");
deleate_patient.attr({
    x: (crud_opt_patient.node.x.animVal.value + 5),
    y: (crud_opt_patient.node.y.animVal.value + 80),
    'font-size': 15
});

//check and uncheck Crud options functions...
var createCheckBoxClicked_patient = false;
var createCheckBoxClick_patient = function () {
    if (!createCheckBoxClicked_patient) {
        create_tick_patient.attr({
            display: "block"
        });
        createCheckBoxClicked_patient = true;
    } else if (createCheckBoxClicked_patient) {
        create_tick_patient.attr({
            display: "none"
        });
        createCheckBoxClicked_patient = false;
    }
}

//listing check all three remaining options include listing , delete , edit
var listingCheckBoxClicked_patient = false;
var listingCheckBoxClick_patient = function () {
    if (!listingCheckBoxClicked_patient) {
        listing_tick_patient.attr({
            display: "block"
        });
        update_tick_patient.attr({
            display: "block"
        });
        deleate_tick_patient.attr({
            display: "block"
        });
        listingCheckBoxClicked_patient = true;
    } else if (listingCheckBoxClicked_patient) {
        listing_tick_patient.attr({
            display: "none"
        });
        update_tick_patient.attr({
            display: "none"
        });
        deleate_tick_patient.attr({
            display: "none"
        });
        listingCheckBoxClicked_patient = false;
    }
}

//now set checkboxes on front of Crud operations...
var createCheckBox_patient = patient.rect(0, 0, 12, 12, 1, 1);
createCheckBox_patient.attr({
    x: (Number(create_patient.node.attributes.x.nodeValue) + 60),
    y: (create_patient.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
createCheckBox_patient.click(createCheckBoxClick_patient);
var listingCheckBox_patient = patient.rect(0, 0, 12, 12, 1, 1);
listingCheckBox_patient.attr({
    x: (Number(listing_patient.node.attributes.x.nodeValue) + 60),
    y: (listing_patient.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
listingCheckBox_patient.click(listingCheckBoxClick_patient);
var updateCheckBox_patient = patient.rect(0, 0, 12, 12, 1, 1);
updateCheckBox_patient.attr({
    x: (Number(update_patient.node.attributes.x.nodeValue) + 60),
    y: (update_patient.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
updateCheckBox_patient.click(listingCheckBoxClick_patient);
var deleateCheckBox_patient = patient.rect(0, 0, 12, 12, 1, 1);
deleateCheckBox_patient.attr({
    x: (Number(deleate_patient.node.attributes.x.nodeValue) + 60),
    y: (deleate_patient.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
deleateCheckBox_patient.click(listingCheckBoxClick_patient);

//tick inside create check_box...
var create_tick_path_patient = "M " + (createCheckBox_patient.node.x.animVal.value + 1) + " " + (createCheckBox_patient.node.y.animVal.value + 6) + "L " + (createCheckBox_patient.node.x.animVal.value + 5) + " " + (createCheckBox_patient.node.y.animVal.value + 10) + "L " + (createCheckBox_patient.node.x.animVal.value + createCheckBox_patient.node.width.animVal.value) + " " + (createCheckBox_patient.node.y.animVal.value - 2);
var create_tick_patient = patient.path(create_tick_path_patient);
create_tick_patient.click(createCheckBoxClick_patient);
create_tick_patient.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside listing check_box...
var listing_tick_path_patient = "M " + (listingCheckBox_patient.node.x.animVal.value + 1) + " " + (listingCheckBox_patient.node.y.animVal.value + 6) + "L " + (listingCheckBox_patient.node.x.animVal.value + 5) + " " + (listingCheckBox_patient.node.y.animVal.value + 10) + "L " + (listingCheckBox_patient.node.x.animVal.value + listingCheckBox_patient.node.width.animVal.value) + " " + (listingCheckBox_patient.node.y.animVal.value - 2);
var listing_tick_patient = patient.path(listing_tick_path_patient);
listing_tick_patient.click(listingCheckBoxClick_patient);
listing_tick_patient.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var update_tick_path_patient = "M " + (updateCheckBox_patient.node.x.animVal.value + 1) + " " + (updateCheckBox_patient.node.y.animVal.value + 6) + "L " + (updateCheckBox_patient.node.x.animVal.value + 5) + " " + (updateCheckBox_patient.node.y.animVal.value + 10) + "L " + (updateCheckBox_patient.node.x.animVal.value + updateCheckBox_patient.node.width.animVal.value) + " " + (updateCheckBox_patient.node.y.animVal.value - 2);
var update_tick_patient = patient.path(update_tick_path_patient);
update_tick_patient.click(listingCheckBoxClick_patient);
update_tick_patient.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var deleate_tick_path_patient = "M " + (deleateCheckBox_patient.node.x.animVal.value + 1) + " " + (deleateCheckBox_patient.node.y.animVal.value + 6) + "L " + (deleateCheckBox_patient.node.x.animVal.value + 5) + " " + (deleateCheckBox_patient.node.y.animVal.value + 10) + "L " + (deleateCheckBox_patient.node.x.animVal.value + deleateCheckBox_patient.node.width.animVal.value) + " " + (deleateCheckBox_patient.node.y.animVal.value - 2);
var deleate_tick_patient = patient.path(deleate_tick_path_patient);
deleate_tick_patient.click(listingCheckBoxClick_patient);
deleate_tick_patient.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

var crud_opt_group_patient = patient.group(crud_opt_patient, create_patient, listing_patient, update_patient, deleate_patient, createCheckBox_patient, listingCheckBox_patient, updateCheckBox_patient, deleateCheckBox_patient, create_tick_patient, listing_tick_patient, update_tick_patient, deleate_tick_patient);
crud_opt_group_patient.attr({
    'display': 'none'
})
//relative modals svg...



var doctor_hasManyThrough0 = Snap("#patient");

//modal rectangle...
var drag_title_doctor_hasManyThrough0 = Snap.parse('<title>Drag and Drop here related model if exist for generate relation inside form</title>');

var block_doctor_hasManyThrough0 = doctor_hasManyThrough0.rect(20, 20, 150, 100, 5, 5);
block_doctor_hasManyThrough0.attr({
    x: (block_patient.node.x.animVal.value + block_patient.node.width.animVal.value + 570),
    width : (block_patient.node.width.animVal.value),
    fill: "rgb(236, 240, 241)",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray': 5 
});


block_doctor_hasManyThrough0.append(drag_title_doctor_hasManyThrough0);


//modal text populate inside modal rect...
var text_doctor_hasManyThrough0 = doctor_hasManyThrough0.text(0, 0, "DOCTOR!");
text_doctor_hasManyThrough0.attr({
    x: block_doctor_hasManyThrough0.node.x.animVal.value + 10,
    y: block_doctor_hasManyThrough0.node.y.animVal.value + 20,
    'font-size': 13
});
// line separates modal head and body...
var line_doctor_hasManyThrough0 = doctor_hasManyThrough0.line(0, 0, 0, 0);
line_doctor_hasManyThrough0.attr({
    x1: block_doctor_hasManyThrough0.node.x.animVal.value,
    y1: Number(text_doctor_hasManyThrough0.node.attributes.y.nodeValue) + 5,
    x2: block_doctor_hasManyThrough0.node.x.animVal.value + block_doctor_hasManyThrough0.node.width.animVal.value,
    y2: Number(text_doctor_hasManyThrough0.node.attributes.y.nodeValue) + 5,
    stroke: "#1f2c39",
    strokeWidth: 1,
    strokeLinecap: "round"
});

// change coordinates of line and mode1_rect according to text
/*<!--block_doctor_hasManyThrough0.attr({
    width: Number(text_doctor_hasManyThrough0.node.attributes.x.value) + (Number(text_doctor_hasManyThrough0.node.textContent.length) * 10 + 30)
});
line_doctor_hasManyThrough0.attr({
    x2: (block_doctor_hasManyThrough0.node.width.animVal.value + block_doctor_hasManyThrough0.node.x.animVal.value)
})-->*/

//tooltip on checkbox...
var select_title_doctor_hasManyThrough0 = Snap.parse('<title>Click here to select model for CRUD Operations , if unchecked Crud form are not created</title>');

//select box checked when modal form is created
var select_doctor_hasManyThrough0 = doctor_hasManyThrough0.rect(0, 0, 15, 15, 2, 2);
select_doctor_hasManyThrough0.attr({
    x: (block_doctor_hasManyThrough0.node.width.animVal.value + block_doctor_hasManyThrough0.node.x.animVal.value - 10),
    y: (block_doctor_hasManyThrough0.node.y.animVal.value - 10),
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 2
});
select_doctor_hasManyThrough0.append(select_title_doctor_hasManyThrough0);

//check symbol inside select box...
var tick_path_doctor_hasManyThrough0 = "M " + (select_doctor_hasManyThrough0.node.x.animVal.value + 3) + " " + (select_doctor_hasManyThrough0.node.y.animVal.value + 5) + "L " + (select_doctor_hasManyThrough0.node.x.animVal.value + 7) + " " + (select_doctor_hasManyThrough0.node.y.animVal.value + 10) + "L " + (select_doctor_hasManyThrough0.node.x.animVal.value + select_doctor_hasManyThrough0.node.width.animVal.value) + " " + (select_doctor_hasManyThrough0.node.y.animVal.value - 3);
var tick_doctor_hasManyThrough0 = doctor_hasManyThrough0.path(tick_path_doctor_hasManyThrough0)
tick_doctor_hasManyThrough0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

//check and uncheck function on checkbox...
var checked_doctor_hasManyThrough0 = false;
var selectCheckBox_doctor_hasManyThrough0 = function () {
    if (!checked_doctor_hasManyThrough0) {
        crud_opt_group_doctor_hasManyThrough0.attr({
            'display': 'block'
        })
        tick_doctor_hasManyThrough0.attr({ display : "block"});
        block_doctor_hasManyThrough0.attr({ x : (block_patient.node.x.animVal.value + block_patient.node.width.animVal.value + 570)});
        checked_doctor_hasManyThrough0 = true;
    } else if (checked_doctor_hasManyThrough0) {
        crud_opt_group_doctor_hasManyThrough0.attr({
            'display': 'none'
        })
        tick_doctor_hasManyThrough0.attr({ display : "none"});
        checked_doctor_hasManyThrough0 = false;
    }
};
select_doctor_hasManyThrough0.click(selectCheckBox_doctor_hasManyThrough0);
tick_doctor_hasManyThrough0.click(selectCheckBox_doctor_hasManyThrough0);

//Crud Rect...
var crud_opt_doctor_hasManyThrough0 = doctor_hasManyThrough0.rect(0, 0, 80, 90, 5, 5);
crud_opt_doctor_hasManyThrough0.attr({
    x: (select_doctor_hasManyThrough0.node.x.animVal.value + 15),
    y: (select_doctor_hasManyThrough0.node.y.animVal.value + 20),
    fill: "white",
    stroke: "#1f2c39",
    'stroke-dasharray': 10
})

//Crud options inside Crud_opt rect...
var create_doctor_hasManyThrough0 = doctor_hasManyThrough0.text(0, 0, "-   create");
create_doctor_hasManyThrough0.attr({
    x: (crud_opt_doctor_hasManyThrough0.node.x.animVal.value + 5),
    y: (crud_opt_doctor_hasManyThrough0.node.y.animVal.value + 20),
    'font-size': 15
});
var listing_doctor_hasManyThrough0 = doctor_hasManyThrough0.text(0, 0, "-   Listing");
listing_doctor_hasManyThrough0.attr({
    x: (crud_opt_doctor_hasManyThrough0.node.x.animVal.value + 5),
    y: (crud_opt_doctor_hasManyThrough0.node.y.animVal.value + 40),
    'font-size': 15
});
var update_doctor_hasManyThrough0 = doctor_hasManyThrough0.text(0, 0, "-   update");
update_doctor_hasManyThrough0.attr({
    x: (crud_opt_doctor_hasManyThrough0.node.x.animVal.value + 5),
    y: (crud_opt_doctor_hasManyThrough0.node.y.animVal.value + 60),
    'font-size': 15
});
var deleate_doctor_hasManyThrough0 = doctor_hasManyThrough0.text(0, 0, "-   delete");
deleate_doctor_hasManyThrough0.attr({
    x: (crud_opt_doctor_hasManyThrough0.node.x.animVal.value + 5),
    y: (crud_opt_doctor_hasManyThrough0.node.y.animVal.value + 80),
    'font-size': 15
});

//check and uncheck Crud options functions...
var createCheckBoxClicked_doctor_hasManyThrough0 = false;
var createCheckBoxClick_doctor_hasManyThrough0 = function () {
    if (!createCheckBoxClicked_doctor_hasManyThrough0) {
        create_tick_doctor_hasManyThrough0.attr({
            display: "block"
        });
        createCheckBoxClicked_doctor_hasManyThrough0 = true;
    } else if (createCheckBoxClicked_doctor_hasManyThrough0) {
        create_tick_doctor_hasManyThrough0.attr({
            display: "none"
        });
        createCheckBoxClicked_doctor_hasManyThrough0 = false;
    }
}

//listing check all three remaining options include listing , delete , edit
var listingCheckBoxClicked_doctor_hasManyThrough0 = false;
var listingCheckBoxClick_doctor_hasManyThrough0 = function () {
    if (!listingCheckBoxClicked_doctor_hasManyThrough0) {
        listing_tick_doctor_hasManyThrough0.attr({
            display: "block"
        });
        update_tick_doctor_hasManyThrough0.attr({
            display: "block"
        });
        deleate_tick_doctor_hasManyThrough0.attr({
            display: "block"
        });
        listingCheckBoxClicked_doctor_hasManyThrough0 = true;
    } else if (listingCheckBoxClicked_doctor_hasManyThrough0) {
        listing_tick_doctor_hasManyThrough0.attr({
            display: "none"
        });
        update_tick_doctor_hasManyThrough0.attr({
            display: "none"
        });
        deleate_tick_doctor_hasManyThrough0.attr({
            display: "none"
        });
        listingCheckBoxClicked_doctor_hasManyThrough0 = false;
    }
}

//now set checkboxes on front of Crud operations...
var createCheckBox_doctor_hasManyThrough0 = doctor_hasManyThrough0.rect(0, 0, 12, 12, 1, 1);
createCheckBox_doctor_hasManyThrough0.attr({
    x: (Number(create_doctor_hasManyThrough0.node.attributes.x.nodeValue) + 60),
    y: (create_doctor_hasManyThrough0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
createCheckBox_doctor_hasManyThrough0.click(createCheckBoxClick_doctor_hasManyThrough0);
var listingCheckBox_doctor_hasManyThrough0 = doctor_hasManyThrough0.rect(0, 0, 12, 12, 1, 1);
listingCheckBox_doctor_hasManyThrough0.attr({
    x: (Number(listing_doctor_hasManyThrough0.node.attributes.x.nodeValue) + 60),
    y: (listing_doctor_hasManyThrough0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
listingCheckBox_doctor_hasManyThrough0.click(listingCheckBoxClick_doctor_hasManyThrough0);
var updateCheckBox_doctor_hasManyThrough0 = doctor_hasManyThrough0.rect(0, 0, 12, 12, 1, 1);
updateCheckBox_doctor_hasManyThrough0.attr({
    x: (Number(update_doctor_hasManyThrough0.node.attributes.x.nodeValue) + 60),
    y: (update_doctor_hasManyThrough0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
updateCheckBox_doctor_hasManyThrough0.click(listingCheckBoxClick_doctor_hasManyThrough0);
var deleateCheckBox_doctor_hasManyThrough0 = doctor_hasManyThrough0.rect(0, 0, 12, 12, 1, 1);
deleateCheckBox_doctor_hasManyThrough0.attr({
    x: (Number(deleate_doctor_hasManyThrough0.node.attributes.x.nodeValue) + 60),
    y: (deleate_doctor_hasManyThrough0.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
deleateCheckBox_doctor_hasManyThrough0.click(listingCheckBoxClick_doctor_hasManyThrough0);

//tick inside create check_box...
var create_tick_path_doctor_hasManyThrough0 = "M " + (createCheckBox_doctor_hasManyThrough0.node.x.animVal.value + 1) + " " + (createCheckBox_doctor_hasManyThrough0.node.y.animVal.value + 6) + "L " + (createCheckBox_doctor_hasManyThrough0.node.x.animVal.value + 5) + " " + (createCheckBox_doctor_hasManyThrough0.node.y.animVal.value + 10) + "L " + (createCheckBox_doctor_hasManyThrough0.node.x.animVal.value + createCheckBox_doctor_hasManyThrough0.node.width.animVal.value) + " " + (createCheckBox_doctor_hasManyThrough0.node.y.animVal.value - 2);
var create_tick_doctor_hasManyThrough0 = doctor_hasManyThrough0.path(create_tick_path_doctor_hasManyThrough0);
create_tick_doctor_hasManyThrough0.click(createCheckBoxClick_doctor_hasManyThrough0);
create_tick_doctor_hasManyThrough0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside listing check_box...
var listing_tick_path_doctor_hasManyThrough0 = "M " + (listingCheckBox_doctor_hasManyThrough0.node.x.animVal.value + 1) + " " + (listingCheckBox_doctor_hasManyThrough0.node.y.animVal.value + 6) + "L " + (listingCheckBox_doctor_hasManyThrough0.node.x.animVal.value + 5) + " " + (listingCheckBox_doctor_hasManyThrough0.node.y.animVal.value + 10) + "L " + (listingCheckBox_doctor_hasManyThrough0.node.x.animVal.value + listingCheckBox_doctor_hasManyThrough0.node.width.animVal.value) + " " + (listingCheckBox_doctor_hasManyThrough0.node.y.animVal.value - 2);
var listing_tick_doctor_hasManyThrough0 = doctor_hasManyThrough0.path(listing_tick_path_doctor_hasManyThrough0);
listing_tick_doctor_hasManyThrough0.click(listingCheckBoxClick_doctor_hasManyThrough0);
listing_tick_doctor_hasManyThrough0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var update_tick_path_doctor_hasManyThrough0 = "M " + (updateCheckBox_doctor_hasManyThrough0.node.x.animVal.value + 1) + " " + (updateCheckBox_doctor_hasManyThrough0.node.y.animVal.value + 6) + "L " + (updateCheckBox_doctor_hasManyThrough0.node.x.animVal.value + 5) + " " + (updateCheckBox_doctor_hasManyThrough0.node.y.animVal.value + 10) + "L " + (updateCheckBox_doctor_hasManyThrough0.node.x.animVal.value + updateCheckBox_doctor_hasManyThrough0.node.width.animVal.value) + " " + (updateCheckBox_doctor_hasManyThrough0.node.y.animVal.value - 2);
var update_tick_doctor_hasManyThrough0 = doctor_hasManyThrough0.path(update_tick_path_doctor_hasManyThrough0);
update_tick_doctor_hasManyThrough0.click(listingCheckBoxClick_doctor_hasManyThrough0);
update_tick_doctor_hasManyThrough0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var deleate_tick_path_doctor_hasManyThrough0 = "M " + (deleateCheckBox_doctor_hasManyThrough0.node.x.animVal.value + 1) + " " + (deleateCheckBox_doctor_hasManyThrough0.node.y.animVal.value + 6) + "L " + (deleateCheckBox_doctor_hasManyThrough0.node.x.animVal.value + 5) + " " + (deleateCheckBox_doctor_hasManyThrough0.node.y.animVal.value + 10) + "L " + (deleateCheckBox_doctor_hasManyThrough0.node.x.animVal.value + deleateCheckBox_doctor_hasManyThrough0.node.width.animVal.value) + " " + (deleateCheckBox_doctor_hasManyThrough0.node.y.animVal.value - 2);
var deleate_tick_doctor_hasManyThrough0 = doctor_hasManyThrough0.path(deleate_tick_path_doctor_hasManyThrough0);
deleate_tick_doctor_hasManyThrough0.click(listingCheckBoxClick_doctor_hasManyThrough0);
deleate_tick_doctor_hasManyThrough0.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

var crud_opt_group_doctor_hasManyThrough0 = doctor_hasManyThrough0.group(crud_opt_doctor_hasManyThrough0, create_doctor_hasManyThrough0, listing_doctor_hasManyThrough0, update_doctor_hasManyThrough0, deleate_doctor_hasManyThrough0, createCheckBox_doctor_hasManyThrough0, listingCheckBox_doctor_hasManyThrough0, updateCheckBox_doctor_hasManyThrough0, deleateCheckBox_doctor_hasManyThrough0, create_tick_doctor_hasManyThrough0, listing_tick_doctor_hasManyThrough0, update_tick_doctor_hasManyThrough0, deleate_tick_doctor_hasManyThrough0);
crud_opt_group_doctor_hasManyThrough0.attr({
    'display': 'none'
})

//now linked model in hasManyThrough relation
var appiontment_hasManyThrough0patient = Snap("#patient");

//modal rectangle...
var drag_title_appiontment_hasManyThrough0patient = Snap.parse('<title>Drag and Drop here related model if exist for generate relation inside form</title>');

var block_appiontment_hasManyThrough0patient = appiontment_hasManyThrough0patient.rect(20, 20, 150, 100, 5, 5);
block_appiontment_hasManyThrough0patient.attr({
    x: (block_patient.node.x.animVal.value + block_patient.node.width.animVal.value + 200),
    width : (block_patient.node.width.animVal.value),
    fill: "rgb(236, 240, 241)",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray': 5 
});


block_appiontment_hasManyThrough0patient.append(drag_title_appiontment_hasManyThrough0patient);


//modal text populate inside modal rect...
var text_appiontment_hasManyThrough0patient = appiontment_hasManyThrough0patient.text(0, 0, "APPIONTMENT!");
text_appiontment_hasManyThrough0patient.attr({
    x: block_appiontment_hasManyThrough0patient.node.x.animVal.value + 10,
    y: block_appiontment_hasManyThrough0patient.node.y.animVal.value + 20,
    'font-size': 13
});
// line separates modal head and body...
var line_appiontment_hasManyThrough0patient = appiontment_hasManyThrough0patient.line(0, 0, 0, 0);
line_appiontment_hasManyThrough0patient.attr({
    x1: block_appiontment_hasManyThrough0patient.node.x.animVal.value,
    y1: Number(text_appiontment_hasManyThrough0patient.node.attributes.y.nodeValue) + 5,
    x2: block_appiontment_hasManyThrough0patient.node.x.animVal.value + block_appiontment_hasManyThrough0patient.node.width.animVal.value,
    y2: Number(text_appiontment_hasManyThrough0patient.node.attributes.y.nodeValue) + 5,
    stroke: "#1f2c39",
    strokeWidth: 1,
    strokeLinecap: "round"
});


//line which attach 2nd model to linked model
var DoctorToappiontmentPath  = "M " +(block_doctor_hasManyThrough0.node.x.animVal.value) + " " + (block_doctor_hasManyThrough0.node.y.animVal.value + 50) + "H " + (block_appiontment_hasManyThrough0patient.node.x.animVal.value + block_appiontment_hasManyThrough0patient.node.width.animVal.value);

var DoctorToappiontment = patient.path(DoctorToappiontmentPath);
DoctorToappiontment.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1
})
//polygon {Arrow at end of line toward linkedmodel from 2nd model
var DoctorToappiontmentArrowPoints = [(block_appiontment_hasManyThrough0patient.node.x.animVal.value + block_appiontment_hasManyThrough0patient.node.width.animVal.value) , (block_appiontment_hasManyThrough0patient.node.y.animVal.value + 50) , (block_appiontment_hasManyThrough0patient.node.x.animVal.value + block_appiontment_hasManyThrough0patient.node.width.animVal.value + 10) , (block_appiontment_hasManyThrough0patient.node.y.animVal.value +50 -10) , (block_appiontment_hasManyThrough0patient.node.x.animVal.value + block_appiontment_hasManyThrough0patient.node.width.animVal.value + 10) , (block_appiontment_hasManyThrough0patient.node.y.animVal.value + 50 + 10) ];
var DoctorToappiontmentArrow = patient.polygon(DoctorToappiontmentArrowPoints);
DoctorToappiontmentArrow.attr({
    fill: "#1f2c39",
    stroke: "#1f2c39",
    strokeWidth: 1,
});


// change coordinates of line and mode1_rect according to text
/*<!--block_appiontment_hasManyThrough0patient.attr({
    width: Number(text_appiontment_hasManyThrough0patient.node.attributes.x.value) + (Number(text_appiontment_hasManyThrough0patient.node.textContent.length) * 10 + 30)
});
line_appiontment_hasManyThrough0patient.attr({
    x2: (block_appiontment_hasManyThrough0patient.node.width.animVal.value + block_appiontment_hasManyThrough0patient.node.x.animVal.value)
})-->*/

//tooltip on checkbox...
var select_title_appiontment_hasManyThrough0patient = Snap.parse('<title>Click here to select model for CRUD Operations , if unchecked Crud form are not created</title>');

//select box checked when modal form is created
var select_appiontment_hasManyThrough0patient = appiontment_hasManyThrough0patient.rect(0, 0, 15, 15, 2, 2);
select_appiontment_hasManyThrough0patient.attr({
    x: (block_appiontment_hasManyThrough0patient.node.width.animVal.value + block_appiontment_hasManyThrough0patient.node.x.animVal.value - 10),
    y: (block_appiontment_hasManyThrough0patient.node.y.animVal.value - 10),
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 2
});
select_appiontment_hasManyThrough0patient.append(select_title_appiontment_hasManyThrough0patient);

//check symbol inside select box...
var tick_path_appiontment_hasManyThrough0patient = "M " + (select_appiontment_hasManyThrough0patient.node.x.animVal.value + 3) + " " + (select_appiontment_hasManyThrough0patient.node.y.animVal.value + 5) + "L " + (select_appiontment_hasManyThrough0patient.node.x.animVal.value + 7) + " " + (select_appiontment_hasManyThrough0patient.node.y.animVal.value + 10) + "L " + (select_appiontment_hasManyThrough0patient.node.x.animVal.value + select_appiontment_hasManyThrough0patient.node.width.animVal.value) + " " + (select_appiontment_hasManyThrough0patient.node.y.animVal.value - 3);
var tick_appiontment_hasManyThrough0patient = appiontment_hasManyThrough0patient.path(tick_path_appiontment_hasManyThrough0patient)
tick_appiontment_hasManyThrough0patient.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

//check and uncheck function on checkbox...
var checked_appiontment_hasManyThrough0patient = false;
var selectCheckBox_appiontment_hasManyThrough0patient = function () {
    if (!checked_appiontment_hasManyThrough0patient) {
        crud_opt_group_appiontment_hasManyThrough0patient.attr({
            'display': 'block'
        })
        tick_appiontment_hasManyThrough0patient.attr({ display : "block"});
        block_appiontment_hasManyThrough0patient.attr({ x : (block_patient.node.x.animVal.value + block_patient.node.width.animVal.value + 200)});
        checked_appiontment_hasManyThrough0patient = true;
    } else if (checked_appiontment_hasManyThrough0patient) {
        crud_opt_group_appiontment_hasManyThrough0patient.attr({
            'display': 'none'
        })
        tick_appiontment_hasManyThrough0patient.attr({ display : "none"});
        checked_appiontment_hasManyThrough0patient = false;
    }
};
select_appiontment_hasManyThrough0patient.click(selectCheckBox_appiontment_hasManyThrough0patient);
tick_appiontment_hasManyThrough0patient.click(selectCheckBox_appiontment_hasManyThrough0patient);

//Crud Rect...
var crud_opt_appiontment_hasManyThrough0patient = appiontment_hasManyThrough0patient.rect(0, 0, 80, 90, 5, 5);
crud_opt_appiontment_hasManyThrough0patient.attr({
    x: (select_appiontment_hasManyThrough0patient.node.x.animVal.value + 15),
    y: (select_appiontment_hasManyThrough0patient.node.y.animVal.value + 20),
    fill: "white",
    stroke: "#1f2c39",
    'stroke-dasharray': 10
})

//Crud options inside Crud_opt rect...
var create_appiontment_hasManyThrough0patient = appiontment_hasManyThrough0patient.text(0, 0, "-   create");
create_appiontment_hasManyThrough0patient.attr({
    x: (crud_opt_appiontment_hasManyThrough0patient.node.x.animVal.value + 5),
    y: (crud_opt_appiontment_hasManyThrough0patient.node.y.animVal.value + 20),
    'font-size': 15
});
var listing_appiontment_hasManyThrough0patient = appiontment_hasManyThrough0patient.text(0, 0, "-   Listing");
listing_appiontment_hasManyThrough0patient.attr({
    x: (crud_opt_appiontment_hasManyThrough0patient.node.x.animVal.value + 5),
    y: (crud_opt_appiontment_hasManyThrough0patient.node.y.animVal.value + 40),
    'font-size': 15
});
var update_appiontment_hasManyThrough0patient = appiontment_hasManyThrough0patient.text(0, 0, "-   update");
update_appiontment_hasManyThrough0patient.attr({
    x: (crud_opt_appiontment_hasManyThrough0patient.node.x.animVal.value + 5),
    y: (crud_opt_appiontment_hasManyThrough0patient.node.y.animVal.value + 60),
    'font-size': 15
});
var deleate_appiontment_hasManyThrough0patient = appiontment_hasManyThrough0patient.text(0, 0, "-   delete");
deleate_appiontment_hasManyThrough0patient.attr({
    x: (crud_opt_appiontment_hasManyThrough0patient.node.x.animVal.value + 5),
    y: (crud_opt_appiontment_hasManyThrough0patient.node.y.animVal.value + 80),
    'font-size': 15
});

//check and uncheck Crud options functions...
var createCheckBoxClicked_appiontment_hasManyThrough0patient = false;
var createCheckBoxClick_appiontment_hasManyThrough0patient = function () {
    if (!createCheckBoxClicked_appiontment_hasManyThrough0patient) {
        create_tick_appiontment_hasManyThrough0patient.attr({
            display: "block"
        });
        createCheckBoxClicked_appiontment_hasManyThrough0patient = true;
    } else if (createCheckBoxClicked_appiontment_hasManyThrough0patient) {
        create_tick_appiontment_hasManyThrough0patient.attr({
            display: "none"
        });
        createCheckBoxClicked_appiontment_hasManyThrough0patient = false;
    }
}

//listing check all three remaining options include listing , delete , edit
var listingCheckBoxClicked_appiontment_hasManyThrough0patient = false;
var listingCheckBoxClick_appiontment_hasManyThrough0patient = function () {
    if (!listingCheckBoxClicked_appiontment_hasManyThrough0patient) {
        listing_tick_appiontment_hasManyThrough0patient.attr({
            display: "block"
        });
        update_tick_appiontment_hasManyThrough0patient.attr({
            display: "block"
        });
        deleate_tick_appiontment_hasManyThrough0patient.attr({
            display: "block"
        });
        listingCheckBoxClicked_appiontment_hasManyThrough0patient = true;
    } else if (listingCheckBoxClicked_appiontment_hasManyThrough0patient) {
        listing_tick_appiontment_hasManyThrough0patient.attr({
            display: "none"
        });
        update_tick_appiontment_hasManyThrough0patient.attr({
            display: "none"
        });
        deleate_tick_appiontment_hasManyThrough0patient.attr({
            display: "none"
        });
        listingCheckBoxClicked_appiontment_hasManyThrough0patient = false;
    }
}

//now set checkboxes on front of Crud operations...
var createCheckBox_appiontment_hasManyThrough0patient = appiontment_hasManyThrough0patient.rect(0, 0, 12, 12, 1, 1);
createCheckBox_appiontment_hasManyThrough0patient.attr({
    x: (Number(create_appiontment_hasManyThrough0patient.node.attributes.x.nodeValue) + 60),
    y: (create_appiontment_hasManyThrough0patient.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
createCheckBox_appiontment_hasManyThrough0patient.click(createCheckBoxClick_appiontment_hasManyThrough0patient);
var listingCheckBox_appiontment_hasManyThrough0patient = appiontment_hasManyThrough0patient.rect(0, 0, 12, 12, 1, 1);
listingCheckBox_appiontment_hasManyThrough0patient.attr({
    x: (Number(listing_appiontment_hasManyThrough0patient.node.attributes.x.nodeValue) + 60),
    y: (listing_appiontment_hasManyThrough0patient.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
listingCheckBox_appiontment_hasManyThrough0patient.click(listingCheckBoxClick_appiontment_hasManyThrough0patient);
var updateCheckBox_appiontment_hasManyThrough0patient = appiontment_hasManyThrough0patient.rect(0, 0, 12, 12, 1, 1);
updateCheckBox_appiontment_hasManyThrough0patient.attr({
    x: (Number(update_appiontment_hasManyThrough0patient.node.attributes.x.nodeValue) + 60),
    y: (update_appiontment_hasManyThrough0patient.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
});
updateCheckBox_appiontment_hasManyThrough0patient.click(listingCheckBoxClick_appiontment_hasManyThrough0patient);
var deleateCheckBox_appiontment_hasManyThrough0patient = appiontment_hasManyThrough0patient.rect(0, 0, 12, 12, 1, 1);
deleateCheckBox_appiontment_hasManyThrough0patient.attr({
    x: (Number(deleate_appiontment_hasManyThrough0patient.node.attributes.x.nodeValue) + 60),
    y: (deleate_appiontment_hasManyThrough0patient.node.attributes.y.nodeValue - 10),
    fill: "white",
    stroke: "#1f2c39",
})
deleateCheckBox_appiontment_hasManyThrough0patient.click(listingCheckBoxClick_appiontment_hasManyThrough0patient);

//tick inside create check_box...
var create_tick_path_appiontment_hasManyThrough0patient = "M " + (createCheckBox_appiontment_hasManyThrough0patient.node.x.animVal.value + 1) + " " + (createCheckBox_appiontment_hasManyThrough0patient.node.y.animVal.value + 6) + "L " + (createCheckBox_appiontment_hasManyThrough0patient.node.x.animVal.value + 5) + " " + (createCheckBox_appiontment_hasManyThrough0patient.node.y.animVal.value + 10) + "L " + (createCheckBox_appiontment_hasManyThrough0patient.node.x.animVal.value + createCheckBox_appiontment_hasManyThrough0patient.node.width.animVal.value) + " " + (createCheckBox_appiontment_hasManyThrough0patient.node.y.animVal.value - 2);
var create_tick_appiontment_hasManyThrough0patient = appiontment_hasManyThrough0patient.path(create_tick_path_appiontment_hasManyThrough0patient);
create_tick_appiontment_hasManyThrough0patient.click(createCheckBoxClick_appiontment_hasManyThrough0patient);
create_tick_appiontment_hasManyThrough0patient.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside listing check_box...
var listing_tick_path_appiontment_hasManyThrough0patient = "M " + (listingCheckBox_appiontment_hasManyThrough0patient.node.x.animVal.value + 1) + " " + (listingCheckBox_appiontment_hasManyThrough0patient.node.y.animVal.value + 6) + "L " + (listingCheckBox_appiontment_hasManyThrough0patient.node.x.animVal.value + 5) + " " + (listingCheckBox_appiontment_hasManyThrough0patient.node.y.animVal.value + 10) + "L " + (listingCheckBox_appiontment_hasManyThrough0patient.node.x.animVal.value + listingCheckBox_appiontment_hasManyThrough0patient.node.width.animVal.value) + " " + (listingCheckBox_appiontment_hasManyThrough0patient.node.y.animVal.value - 2);
var listing_tick_appiontment_hasManyThrough0patient = appiontment_hasManyThrough0patient.path(listing_tick_path_appiontment_hasManyThrough0patient);
listing_tick_appiontment_hasManyThrough0patient.click(listingCheckBoxClick_appiontment_hasManyThrough0patient);
listing_tick_appiontment_hasManyThrough0patient.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var update_tick_path_appiontment_hasManyThrough0patient = "M " + (updateCheckBox_appiontment_hasManyThrough0patient.node.x.animVal.value + 1) + " " + (updateCheckBox_appiontment_hasManyThrough0patient.node.y.animVal.value + 6) + "L " + (updateCheckBox_appiontment_hasManyThrough0patient.node.x.animVal.value + 5) + " " + (updateCheckBox_appiontment_hasManyThrough0patient.node.y.animVal.value + 10) + "L " + (updateCheckBox_appiontment_hasManyThrough0patient.node.x.animVal.value + updateCheckBox_appiontment_hasManyThrough0patient.node.width.animVal.value) + " " + (updateCheckBox_appiontment_hasManyThrough0patient.node.y.animVal.value - 2);
var update_tick_appiontment_hasManyThrough0patient = appiontment_hasManyThrough0patient.path(update_tick_path_appiontment_hasManyThrough0patient);
update_tick_appiontment_hasManyThrough0patient.click(listingCheckBoxClick_appiontment_hasManyThrough0patient);
update_tick_appiontment_hasManyThrough0patient.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});
//tick inside create check_box...
var deleate_tick_path_appiontment_hasManyThrough0patient = "M " + (deleateCheckBox_appiontment_hasManyThrough0patient.node.x.animVal.value + 1) + " " + (deleateCheckBox_appiontment_hasManyThrough0patient.node.y.animVal.value + 6) + "L " + (deleateCheckBox_appiontment_hasManyThrough0patient.node.x.animVal.value + 5) + " " + (deleateCheckBox_appiontment_hasManyThrough0patient.node.y.animVal.value + 10) + "L " + (deleateCheckBox_appiontment_hasManyThrough0patient.node.x.animVal.value + deleateCheckBox_appiontment_hasManyThrough0patient.node.width.animVal.value) + " " + (deleateCheckBox_appiontment_hasManyThrough0patient.node.y.animVal.value - 2);
var deleate_tick_appiontment_hasManyThrough0patient = appiontment_hasManyThrough0patient.path(deleate_tick_path_appiontment_hasManyThrough0patient);
deleate_tick_appiontment_hasManyThrough0patient.click(listingCheckBoxClick_appiontment_hasManyThrough0patient);
deleate_tick_appiontment_hasManyThrough0patient.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    display: "none"
});

var crud_opt_group_appiontment_hasManyThrough0patient = appiontment_hasManyThrough0patient.group(crud_opt_appiontment_hasManyThrough0patient, create_appiontment_hasManyThrough0patient, listing_appiontment_hasManyThrough0patient, update_appiontment_hasManyThrough0patient, deleate_appiontment_hasManyThrough0patient, createCheckBox_appiontment_hasManyThrough0patient, listingCheckBox_appiontment_hasManyThrough0patient, updateCheckBox_appiontment_hasManyThrough0patient, deleateCheckBox_appiontment_hasManyThrough0patient, create_tick_appiontment_hasManyThrough0patient, listing_tick_appiontment_hasManyThrough0patient, update_tick_appiontment_hasManyThrough0patient, deleate_tick_appiontment_hasManyThrough0patient);
crud_opt_group_appiontment_hasManyThrough0patient.attr({
    'display': 'none'
})

//line extend line from current model and attach to related model in hasManyThrough relation...
var patientToDoctorPath = "M " + (block_appiontment_hasManyThrough0patient.node.x.animVal.value + block_appiontment_hasManyThrough0patient.node.width.animVal.value + 100) + " " + (block_appiontment_hasManyThrough0patient.node.y.animVal.value + 60) + "V " + (block_doctor_hasManyThrough0.node.y.animVal.value + 60) + "H " + (block_doctor_hasManyThrough0.node.x.animVal.value);
var patientToDoctor = patient.path(patientToDoctorPath);
patientToDoctor.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1,
    'stroke-dasharray' : 5
})

//line toward linked model from current model

var patientToappiontmentPath = "M " + (block_patient.node.x.animVal.value + block_patient.node.width.animVal.value + 100) + " " + (block_patient.node.y.animVal.value + 50) + "V " +  (block_appiontment_hasManyThrough0patient.node.y.animVal.value + 50) + "H " +  (block_appiontment_hasManyThrough0patient.node.x.animVal.value); 


var patientToappiontment = patient.path(patientToappiontmentPath);
patientToappiontment.attr({
    fill: "white",
    stroke: "#1f2c39",
    strokeWidth: 1
})
//polygon {Arrow at end of line toward linkedmodel}
var patientToappiontmentArrowPoints = [block_appiontment_hasManyThrough0patient.node.x.animVal.value,(block_appiontment_hasManyThrough0patient.node.y.animVal.value+50),(block_appiontment_hasManyThrough0patient.node.x.animVal.value-10),(block_appiontment_hasManyThrough0patient.node.y.animVal.value+50-10),(block_appiontment_hasManyThrough0patient.node.x.animVal.value-10),(block_appiontment_hasManyThrough0patient.node.y.animVal.value+50+10)];
var patientToappiontmentArrow = patient.polygon(patientToappiontmentArrowPoints);
patientToappiontmentArrow.attr({
    fill: "#1f2c39",
    stroke: "#1f2c39",
    strokeWidth: 1,
});

