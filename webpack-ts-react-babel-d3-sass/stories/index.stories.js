import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import NewComponent from "../src/components/NewComponent";

storiesOf("Hello world", module)
.add("example1", () => <NewComponent action={action("clicked")} />)
.add("example2", () => <NewComponent action={linkTo("example1")} />);
