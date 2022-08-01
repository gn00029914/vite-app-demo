import { mount, RouterLinkStub } from '@vue/test-utils'
import App from './App.vue'

test('mount component', async () => {
  expect(App).toBeTruthy()

  const wrapper = mount(App, {
    global: {
      stubs: {
        RouterLink: RouterLinkStub
      }
    }
  })

  expect(wrapper.text()).toContain('HelloWorld')
  expect(wrapper.html()).toMatchSnapshot()

  expect(wrapper.text()).toContain('Home')
  expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/')

  expect(wrapper.text()).toContain('About')
})
