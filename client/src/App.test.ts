/**
 * @vitest-environment happy-dom
 */

import { mount } from '@vue/test-utils'
import App from './App.vue'

test('mount component', async () => {
  expect(App).toBeTruthy()

  const wrapper = mount(App, {
    global: {
      stubs: {
        // RouterLink: RouterLinkStub
      }
    }
  })

  expect(wrapper.text()).toContain('Navbar')
  // expect(wrapper.html()).toMatchSnapshot()

  // expect(wrapper.text()).toContain('Home')
  // expect(wrapper.findComponent(RouterLinkStub).props().to).toBe(
  //   '/' + process.env.npm_package_name + '/'
  // )

  // expect(wrapper.text()).toContain('About')
})
