const {Schema, model} = require('mongoose');

const CustomerSchema = Schema({
    telephone: {
        type: String,
        required: [true, 'The telephone is required']
    },
    amount:{
        type: Number,
        default: 0,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    date:{
        type: Date,
    }
})

CustomerSchema.methods.toJSON = function (){
    const { __v, state, ...data } = this.toObject();
    return data
}

module.exports = model('Customer', CustomerSchema);