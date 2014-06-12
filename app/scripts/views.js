class HomeView extends Backbone.View {

  initialize () {
    this.template = $('script[name="home"]').html();
  }

  render () {
    this.$el.html(_.template(this.template));
    return this;
  }

}

class ResourcesView extends Backbone.View {

  initialize () {
    this.template = $('script[name="resources"]').html();
  }

  render () {
    this.$el.html(_.template(this.template));
    return this;
  }

}

export { HomeView, ResourcesView };