import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function SCard() {
    return (
      <Card className="mt-6 w-96">
        <CardBody>
        <svg width="64px" height="64px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#073A68"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>building1</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="icon" fill="#073A68" transform="translate(42.666667, 64.000000)"> <path d="M320,1.42108547e-14 L320,85.333 L405.333333,85.3333333 L405.333,341.333 L426.666667,341.333333 L426.666667,384 L320,383.999 L320,384 L106.666667,384 L106.666,383.999 L3.55271368e-14,384 L3.55271368e-14,341.333333 L21.333,341.333 L21.3333333,149.333333 L106.666,149.333 L106.666667,1.42108547e-14 L320,1.42108547e-14 Z M277.333333,42.6666667 L149.333333,42.6666667 L149.333333,341.333333 L192,341.333333 L192,277.333333 L234.666667,277.333333 L234.666667,341.333333 L277.333333,341.333333 L277.333333,42.6666667 Z M362.666667,128 L320,128 L320,341.333333 L362.666667,341.333333 L362.666667,128 Z M106.666667,192 L64,192 L64,341.333333 L106.666667,341.333333 L106.666667,192 Z M234.666667,170.666667 L234.666667,213.333333 L192,213.333333 L192,170.666667 L234.666667,170.666667 Z M234.666667,85.3333333 L234.666667,128 L192,128 L192,85.3333333 L234.666667,85.3333333 Z" id="Combined-Shape"> </path> </g> </g> </g></svg>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Construction Rapide
          </Typography>
          <Typography>
            Because it&apos;s about motivating the doers. Because I&apos;m here to
            follow my dreams and inspire others.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <a href="#" className="inline-block">
            <Button size="sm" variant="text" className="flex items-center gap-2">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardFooter>
      </Card>
    );
  }