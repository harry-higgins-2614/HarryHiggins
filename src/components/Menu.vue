<template>
  <div class="">
    <Menu as="div" class="">
      <div>
        <MenuButton
          class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-black border-2 border-black border-opacity-20  rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Options
          <MenuIcon
            class="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                ]"
              >
                <EditIcon
                  :active="active"
                  class="w-5 h-5 mr-2 text-violet-400"
                  aria-hidden="true"
                />
                Edit
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                ]"
              >
                <DuplicateIcon
                  :active="active"
                  class="w-5 h-5 mr-2 text-violet-400"
                  aria-hidden="true"
                />
                Duplicate
              </button>
            </MenuItem>
          </div>
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                ]"
              >
                <ArchiveIcon
                  :active="active"
                  class="w-5 h-5 mr-2 text-violet-400"
                  aria-hidden="true"
                />
                Archive
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                ]"
              >
                <MoveIcon
                  :active="active"
                  class="w-5 h-5 mr-2 text-violet-400"
                  aria-hidden="true"
                />
                Move
              </button>
            </MenuItem>
          </div>

          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                ]"
              >
                <DeleteIcon
                  :active="active"
                  class="w-5 h-5 mr-2 text-violet-400"
                  aria-hidden="true"
                />
                Delete
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon, MenuIcon } from "@heroicons/vue/outline"
export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    ChevronDownIcon,
    MenuIcon
  },
}
</script>