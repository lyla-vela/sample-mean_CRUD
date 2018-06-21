const mongoose = require('mongoose');
var Task = mongoose.model('Task');

module.exports = {
    index: function (req, res) {
        console.log("taskController.js.edit");
        console.log("server.controller.index")
        var tasks;
        Task.find({}, function (err, tasks) {
            if (err) {
                console.log('Error bringing tasks in')
            }
            else {
              console.log("TASKS///////",tasks);  
              res.json({message:"Sent tasks data object", data:tasks});
        
            }
         
        })
        //res.sendFile('index')
    },
    taskView: function (req, res) {
        console.log("taskController.js.taskView");
        console.log(req.params.id);
        var tasks;
        Task.find({ _id: req.params.id }, function (err, tasks) {
            if (err) {
                console.log('Error bringing tasks in')
                console.log(err);
            }
            else {
                tasks = tasks;
                console.log(tasks);
            }
            console.log(tasks);
            res.json({message:"success loading individual task", data: tasks});
        })
    },
    postTask: function (req, res) {
        console.log("taskController.js.postTask");
        console.log("POST DATA", req.body);
        var task = new Task({
            title: req.body.title,
            description: req.body.description,
        });
        task.save(function (err) {
            if (err) {
                console.log('ERROR');
                for (var key in err.errors) {
                    //req.flash('task', err.errors[key].message);
                }
                console.log(err);
                res.json({message:"error", data:err});
            }
            else {
                console.log('successfully added task');
                res.json({message:"successfully saved"});
            }
        })
    },
    editTask: function (req, res) {
        console.log("taskController.js.edit");
        console.log('EDIT DATA', req.body);
        console.log(req.params.id);
        Task.findOne({ _id: req.params.id }, function (err, tasks) {
            tasks.title = req.body.title;
            tasks.description = req.body.description;
            tasks.completed = req.body.completed;
            tasks.save(function (err) {
                if(err){
                    console.log('error');
                    for(var key in err.errors);
                        res.json({message:"error!", data: err});
                }
                else{
                    res.json({message:"success!"});
                }
            })

        })

    },
    delete: function (req, res) {
        console.log("taskController.js.delete");
        Task.remove({ _id: req.params.id }, function (err) {
            if(err){
                res.json({message:"Could not delete task"});
            }
            else{
                res.json({message:"Successfully deleted"});
            }
            
        })
    }

};