type Endpoint = {
    description: string;
    exampleResponse?: object;
};

export type EndpointMap = {
    [key: string]: Endpoint;
};
