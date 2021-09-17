

function validateID(id) {
    if (!id) {
        throw "ID is mising!"
    }
  }



function validateName(name) {
    //let name = new expensegroupModel(req.body);
    if(!name || name === ""){
        throw 'Name is missing!'
    }

}
//amount is float 
 function validateAmount(amount) {
    if(!amount || isNaN(amount) ){
        throw 'Amount must be number'
    }

}
function validateGroupID(id){
    if(!id){
        throw 'ID group is mising!'
    }

}


module.exports = {
    validateID,
    validateName,
    validateAmount,
    validateGroupID
};
