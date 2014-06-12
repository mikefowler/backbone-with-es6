import { HomeView, ResourcesView } from './views';

class Router extends Backbone.Router {

  constructor () {
    this.routes = {
      '': 'home',
      'resources': 'resources'
    };
    super();
  }

  home () {
    console.log('Route#home');
    var view = new HomeView();
    $('#app').html(view.render().$el);
  }

  resources () {
    console.log('Route#resources');
    var view = new ResourcesView();
    $('#app').html(view.render().$el);
  }

}

export default Router;