!--
    < html >
    name;
"viewport";
content = "width=device-width, initial-scale=1" >
    & lt;
! & ndash;
rel;
"stylesheet";
href = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" >  & ndash;
 & gt;
src;
"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" > /script>
    < script;
src = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" > /script>
    < /head>
    < body >
    (function () {
        function class_1() {
        }
        return class_1;
    }());
"container" >
    Table < /h2>
    < p > The.table - responsive;
var creates = (function () {
    function creates() {
    }
    return creates;
}());
a;
responsive;
table;
which;
will;
scroll;
horizontally;
on;
small;
devices(under, 768, px).When;
viewing;
on;
anything;
larger;
than;
768;
px;
wide, there;
is;
no;
difference: /p>
    < div;
var default_1 = (function () {
    function default_1() {
    }
    return default_1;
}());
"table-responsive" >
    (function () {
        function class_2() {
        }
        return class_2;
    }());
"table" >
;
/th>
    < th > Firstname < /th>
    < th > Lastname < /th>
    < th > Age < /th>
    < th > City < /th>
    < th > Country < /th>
    < /tr>
    < /thead>
    < tbody >
    1 < /td>
    < td > Anna < /td>
    < td > Pitt < /td>
    < td > 35 < /td>
    < td > New;
York < /td>
    < td > USA < /td>
    < /tr>
    < /tbody>
    < /table>
    < /div>
    < /div>
    < /body>;
-- >
    (function () {
        function class_3() {
        }
        return class_3;
    }());
"form-group" >
    style;
"text-align: right; margin-right: 10%" >
    style;
"text-align: right" > Filter < /label>
    < input;
type = "text";
id = "inputName"[(ngModel)] = "inputName" /  >
    type;
"button"(click) = "FilterByName()";
value = "Apply" /  >
    /div>
    < /div>
    < div;
var default_2 = (function () {
    function default_2() {
    }
    return default_2;
}());
'row' >
    (function () {
        function class_4() {
        }
        return class_4;
    }());
"panel panel-default" >
    !--Default;
panel;
contents-- >
    (function () {
        function class_5() {
        }
        return class_5;
    }());
'panel-heading';
style = "text-align: center" > User;
Directory < /b></h2 > /div>
    < div;
var default_3 = (function () {
    function default_3() {
    }
    return default_3;
}());
'panel-body' >
    (function () {
        function class_6() {
        }
        return class_6;
    }());
"table table-bordered table-condensed " >
    (function () {
        function class_7() {
        }
        return class_7;
    }());
'decor';
style = "text-align: center;" >
    First;
Name < /td>
    < td > Last;
Name < /td>
    < td > Country < /td>
    < td > State < /td>
    < td > City < /td>
    < td > Address < /td>
    < td > Cell;
Number < /td>
    < td > Home;
Number < /td>
    < /tr>
    < tr;
var default_4 = (function () {
    function default_4() {
    }
    return default_4;
}());
"subdecor" * ngFor;
"let item of items" >
    {};
{
    item.firstname;
}
/td>
    < td > {};
{
    item.lastname;
}
/td>
    < td > {};
{
    item.country;
}
/td>
    < td > {};
{
    item.state;
}
/td>
    < td > {};
{
    item.city;
}
/td>
    < td > {};
{
    item.address;
}
/td>
    < td > {};
{
    item.cellnumber;
}
/td>
    < td > {};
{
    item.homenumber;
}
/td>
    < /tr>
    < /table>
    < div;
var default_5 = (function () {
    function default_5() {
    }
    return default_5;
}());
"btn-toolbar";
role = "toolbar";
style = "margin-left: 10px;" >
    (function () {
        function class_8() {
        }
        return class_8;
    }());
"btn-group" >
    !-- < label;
style = "margin-top:10px" > Page;
{
    {
        currentIndex;
    }
}
/{{pageNumber}}</label > -- >
    /div>
    < div;
var default_6 = (function () {
    function default_6() {
    }
    return default_6;
}());
"btn-group pull-right" >
    (function () {
        function class_9() {
        }
        return class_9;
    }());
"pagination" >
;
"{'disabled': (currentIndex == 1 || pageNumber == 0)}" > (click);
"prevPage()";
href = "#" > Prev < /a></li >
     * ngFor;
"let page of pagesIndex"[ngClass] = "{'active': (currentIndex == page)}" >
    (click);
"setPage(page)";
href = "#" > {};
{
    page;
}
/a>
    < /li>
    < li[ngClass];
"{'disabled': (currentIndex == pageNumber || pageNumber == 0)}" > (click);
"nextPage()";
href = "#" > Next < /a></li >
    /ul>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>;
