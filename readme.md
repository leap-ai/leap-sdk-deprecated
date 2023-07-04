# Leap SDK

The Leap SDK enables you to easily integrate AI powered image generation, fine tuning, and editing into your app.

Getting Started

To get started with our server-side SDK, simply install it using your preferred package manager.

NPM: <https://www.npmjs.com/package/@leap-ai/sdk>
API Reference:<https://docs.tryleap.ai/reference>

### Installation

**Npm:**

```shell
npm i @leap-ai/sdk
```

**Yarn:**

```shell
yarn add @leap-ai/sdk
```

After installing the package, you can initialize it on a server-side route by initializing a new instance of `Leap`, for example:

```typescript
import { Leap } from "@leap-ai/sdk";

const leap = new Leap("YOUR_API_KEY");
```

Optionally, we can also set the leap instance to default to a public model by using the `setPublicModel` method - this way you won't have to provide it on each generation request;

```typescript
// Set the current model to Stable Diffusion 1.5
leap.usePublicModel("sd-1.5");
```

### Generating Your First Image

Once initialized, you can begin calling Leap methods on your API endpoints. For example, to generate an image you can simply use:

```javascript
//...Inside your API handler

// Generate Image
const result = await leap.generate.generateImage({
  prompt: "A cat",
});

if (result) {
  // Print the first image's uri
  console.log(result.images[0].uri);
}
```
