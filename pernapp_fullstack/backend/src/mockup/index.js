import CountryRepository from '../repositories/country.js'
import CustomerRepository from '../repositories/customer.js'
import UserRepository from '../repositories/user.js'
import VendorRepository from '../repositories/vendor.js'
import ProductRepository from '../repositories/product.js'

import countries from './countries.js'
import customers from './customers.js'
import users from './users.js'
import vendors from './vendor.js'
import products from './product.js'

const initCountries = async () => {
  try {
    console.log(`Init countries`)

    let entries = await CountryRepository.find({})
    if (entries.items.length) {
      console.log(`=> countries already exist`)
      return
    }

    for (let i = 0, leng = countries.length; i < leng; i++) {
      await CountryRepository.create(countries[i])
        .then((res) => console.log(`| create countries [${i + 1}/${leng}] successful`))
        .catch((err) =>
          console.log(`| create countries [${i + 1}/${leng}] failed with error: ${err.message}`),
        )
    }
  } catch (error) {
    console.log('initCountries error :>> ', error)
  }
}

const initCustomers = async () => {
  try {
    console.log(`Init customers`)

    let entries = await CustomerRepository.find({})
    if (entries.items.length) {
      console.log(`=> countries already exist`)
      return
    }

    let countriesRes = await CountryRepository.find({ limit: 100 })

    for (let i = 0, leng = customers.length; i < leng; i++) {
      let countryId = countriesRes.items[Math.floor(Math.random() * countriesRes.items.length)].id

      await CustomerRepository.create({ ...customers[i], countryId })
        .then((res) => console.log(`| create customers [${i + 1}/${leng}] successful`))
        .catch((err) =>
          console.log(`| create customers [${i + 1}/${leng}] failed with error: ${err.message}`),
        )
    }
  } catch (error) {
    console.log('initCustomers error :>> ', error)
  }
}

const initUsers = async () => {
  try {
    console.log(`Init users`)

    let entries = await UserRepository.find({})
    if (entries.items.length) {
      console.log(`=> users already exist`)
      return
    }

    let countriesRes = await CountryRepository.find({ limit: 100 })

    for (let i = 0, leng = users.length; i < leng; i++) {
      let countryId = countriesRes.items[Math.floor(Math.random() * countriesRes.items.length)].id

      await UserRepository.create({ ...users[i], countryId })
        .then((res) => console.log(`| create users [${i + 1}/${leng}] successful`))
        .catch((err) =>
          console.log(`| create users [${i + 1}/${leng}] failed with error: ${err.message}`),
        )
    }
  } catch (error) {
    console.log('initUsers error :>> ', error)
  }
}

const initVendors = async () => {
  try {
    console.log(`Init vendors`)

    let entries = await VendorRepository.find({})

    console.log('entries', entries)
    if (entries.length) {
      console.log(`=> vendor already exist`)
      return
    }

    console.log('vendors', vendors)

    for (let i = 0, leng = vendors.length; i < leng; i++) {
      await VendorRepository.create(vendors[i])
        .then((res) => console.log(`| create vendors [${i + 1}/${leng}] successful`))
        .catch((err) =>
          console.log(`| create vendor [${i + 1}/${leng}] failed with error: ${err.message}`),
        )
    }
  } catch (error) {
    console.log('initVendor error :>> ', error)
  }
}

const initProducts = async () => {
  try {
    console.log(`Init Products`)

    let entries = await ProductRepository.find({})

    if (entries.items.length) {
      console.log(`=> Products already exist`)
      return
    }

    let vendors = await VendorRepository.find({})

    for (let i = 0, leng = products.length; i < leng; i++) {
      let vendorId = vendors[Math.floor(Math.random() * vendors.length)].id

      await ProductRepository.create({ ...products[i], vendorId })
        .then((res) => console.log(`| create Products [${i + 1}/${leng}] successful`))
        .catch((err) =>
          console.log(`| create Products [${i + 1}/${leng}] failed with error: ${err.message}`),
        )
    }
  } catch (error) {
    console.log('initProducts error :>> ', error)
  }
}

const init = async () => {
  await initCountries()
  await initCustomers()
  await initUsers()
  await initVendors()
  await initProducts()
}

init()
