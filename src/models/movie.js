import Backbone from 'backbone';


const Movie = Backbone.Model.extend({
  initialize(attributes) {
    this.title = this.attributes.title;
    this.bus = this.bus
    this.attributes.upperCaseTitle = this.title.toUpperCase();
  },
  validate(attributes) {
    const errors = {};

    if (!attributes.title) {
      errors['title'] = ['Title is required'];
    }
    if ( Object.keys(errors).length > 0 ) {
      return errors;
    } else {
      return false;
    }
  }
});

export default Movie;
