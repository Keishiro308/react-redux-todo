import React, {Component}  from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



import { postTask } from '../actions';

class Add extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  renderField(field){
    const { input, label, type, meta:{ touched, error} } = field
    return (
      // <input type='text' name='task[:title]' label={label} placeholder='title' />
      <TextField
        hinttext={label}
        label={label}
        type={type}
        error={!!(touched && error)}
        helperText={touched && error}
        {...input}
        fullWidth={true}
      />
    )
  }

  async onSubmit(values) {
    await this.props.postTask(values)
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props
    const style={
      margin: 12
    }
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>

        <div>
          <Field label='Title' name='title' type='text' component={this.renderField} />
        </div>
        <Button type="submit" style={style} disabled= {pristine || submitting || invalid } >
          Submit
        </Button>
        <Button  style={style} href='/'>
          Cancel
        </Button>
          
      </form>
    )
  }
}

const validate = values =>{
  const errors = {}

  if (!values.title) errors.title = 'Enter a title, please.'

  return errors
}
const mapDispatchToProps = ({ postTask })

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventNewForm' })(Add)

)
