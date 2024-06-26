# Cute Kitties Frontend App

Welcome to the Cute Kitties Frontend App! This app allows you to browse and interact with adorable cat pictures.

## Features

- View a collection of cute cat pictures.
- Like on your favorite cat content.
- View a listing of the most voted cats.

## Installation

To get started with the Cute Kitties Frontend App, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/cute-cat-frontend.git`
2. Navigate to the project directory: `cd cute-cat-frontend`
3. Install the dependencies: `npm install`
4. Start the development server: `npm run dev`

## Interesting features

### Custom hook useFetch

This custom hook uses a the useState and useEffect native React hooks to return and object of 4 elements: the fetching status to conditionnaly load component upon data arrival, the actual fetched data, a setter function (not use in this project... but you never know) and error

### Usage Example

```javascript
const {
  isFetching: loading,
  error,
  fetchedData: kitties,
} = useFetch(fetchKitties, []);
```

In the example above "fetchKitties" is a pointer to a callback function which only does an API call, which can look for example something like this:

```javascript
async function fetchKitties() {
  try {
    const url = `https://site--cute-cat-backend--yq48zswblh2x.code.run/cute-kitties`;
    const { data } = await axios.get(url);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}
```

## Usage

Once the development server is running, you can access the Cute Kitties Frontend App in your web browser at `http://localhost:5173`. Explore the app, browse cute cat pictures, and interact with the content by liking and commenting.

## Contributing

We welcome contributions to the Cute Kitties Frontend App! If you would like to contribute, please follow these guidelines:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request.
