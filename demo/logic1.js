var graph = new joint.dia.Graph();

//创建画布
var paper = new joint.dia.Paper({

    el: $('#paper'),
    model: graph,
    width: 1000, height: 600, gridSize: 5,
    snapLinks: true,
    linkPinning: false,
    defaultLink: new joint.shapes.logic.Wire,

    validateConnection: function(vs, ms, vt, mt, e, vl) {
        //如果两个id一样则是自己连接自己
        if(vs.id==vt.id){
            return false;
        }

        console.log('vs=')
        console.log(vs)   //开始拖拽的目标节点
        console.log('vs-end')

        console.log('ms=')  //节点
        console.log(ms)  //开始拖拽的端口节点
        console.log('ms-end')

        console.log('vt=')
        console.log(vt)  //vt=  结束拖拽的目标节点
        console.log('vt-end')


        console.log('mt=')
        console.log(mt)  //mt=  结束拖拽的端口节点
        console.log('vt-end')

        console.log('e=')
        console.log(e)   //target
        console.log('e-end')

        console.log('vl=')
        console.log(vl)  //线的节点
        console.log('vl-end')
       // debugger;

        // check whether the port is being already used
        var portUsed = _.find(this.model.getLinks(), function(link) {

            return (link.id !== vl.model.id &&
            link.get('target').id === vt.model.id &&
            link.get('target').port === mt.getAttribute('port'));
        });


        return !portUsed;


        return true;


        if (e === 'target') {
            console.log(mt.getAttribute('class'))

            //return true;
            // target requires an input port to connect
            if (!mt || !mt.getAttribute('class') || mt.getAttribute('class').indexOf('input') < 0) return false;
             console.log('ok')
             return true;
            // check whether the port is being already used
            var portUsed = _.find(this.model.getLinks(), function(link) {

                return (link.id !== vl.model.id &&
                link.get('target').id === vt.model.id &&
                link.get('target').port === mt.getAttribute('port'));
            });

            return !portUsed;

        } else { // e === 'source'

            // source requires an output port to connect
            return ms && ms.getAttribute('class') && ms.getAttribute('class').indexOf('output') >= 0;
        }
    }
});


//创造节点
var member = function(x, y, rank, name, image, background, textColor) {

    textColor = textColor || "#000";

    var cell = new joint.shapes.org.Member({
        position: { x: x, y: y },
        attrs: {
           // '.card': { fill: background, stroke: 'none'},
             image: { 'xlink:href':  image, opacity: 0.7 },
          //  '.rank': { text: rank, fill: textColor, 'word-spacing': '-5px', 'letter-spacing': 0},
           // '.name': { text: name, fill: textColor, 'font-size': 13, 'font-family': 'Arial', 'letter-spacing': 0 }
        },
        inPorts: ['in1', 'in2'],
          outPorts: ['out1', 'out2']
    });
    graph.addCell(cell);
    return cell;
};


var bart = member(300, 70, 'CEO', 'Bart Simpson', 'resizeApi.png', '#30d0c6');

// zoom the viewport by 50%
paper.scale(1.5,1.5);


var port = {
    id: 'abc',
    group: 'a',
    args: {},
    label: {
        position: {
            name: 'top',
            args: {}
        },
        markup: '<text class="label-text" fill="blue"/>'
    },
    attrs: { text: { text: 'port1' } },
    markup: '<rect width="10" height="10" stroke="red"/>'
};


//创建一个节点
var shape = new joint.shapes.devs.Model({
    position: {
        x: 100,
        y: 100
    },
    attrs:{
        image: { 'xlink:href':  'resizeApi.png', opacity: 0.7 },
    }
    // inPorts: ['in1', 'in2'],
    // outPorts: ['out1', 'out2']
});


// shape.attr({
//     image: {
//         // pointerdown on the image SVG node will trigger the `element:delete` event
//        // event: 'element:delete',
//         xlinkHref: 'png_1203004_easyicon.net.svg',
//         width: 100,
//         height: 100
//     }
// });
// shape.attr('rect/fill', {
//     type: 'linearGradient',
//     image: {
//         // pointerdown on the image SVG node will trigger the `element:delete` event
//        // event: 'element:delete',
//         xlinkHref: 'srach.jpg',
//         width: 100,
//         height: 100
//     },
//     // stops: [
//     //     { offset: '0%', color: '#E67E22' },
//     //     { offset: '20%', color: '#D35400' },
//     //     { offset: '40%', color: '#E74C3C' },
//     //     { offset: '60%', color: '#C0392B' },
//     //     { offset: '80%', color: '#F39C12' }
//     // ]
// });



shape.addTo(graph);

// adding/removing ports dynamically
shape.addInPort('in1');
shape.removeOutPort('out1').addOutPort('out1');
//连线
// var link = new joint.shapes.devs.Link({
//     source: {
//         id: shape.id,
//         port: 'out1'
//     },
//     target: {
//         x: 200,
//         y: 300
//     }
// });
// link.label(0, {
//     position: .5,
//     attrs: {
//         rect: { fill: 'white' },
//         text: { fill: 'blue', text: 'my label' }
//     }
// });

//link.addTo(graph);

// moving the input ports from `left` to `top`
shape.changeInGroup({ position: 'left' });
// moving the output ports 'right' to 'bottom'
shape.changeOutGroup({ position: 'right' });



//创建一个节点
var shape1 = new joint.shapes.devs.Model({
    position: {
        x: 200,
        y: 300
    },
      inPorts: ['in1', 'in2'],
      outPorts: ['out1', 'out2']
});

//var shape1 = new joint.shapes.logic.Repeater({ position: { x: 410, y: 25 }})
//设置属性
shape1.attr({
    data:'aa',
    refX: '50%', refX2: 20 ,
    rect: { fill: 'blue' },
    text: { fill: 'black', 'font-size': 15 },
    '.myrect2': { fill: 'red' }
});


shape1.addTo(graph);

// adding/removing ports dynamically
shape1.addInPort('in2');
shape1.removeOutPort('out2').addOutPort('out2');
shape1.changeInGroup({ position: 'left' });
// moving the output ports 'right' to 'bottom'
shape1.changeOutGroup({ position: 'right' });

