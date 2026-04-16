class ResponseType{
    constructor(data){
        this.data=data;
    }
    success(){
        this.message="Server Internal Success";
        this.code="200";
        return this;
    }
    error(){
        this.message="Server Internal Error";
        this.code="404";
        return this;
    }
}
module.exports=ResponseType;