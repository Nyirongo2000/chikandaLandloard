import React from 'react'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
  Radio,
} from "@material-tailwind/react";
 
function UserInputForm() {
  return (
    <div>
      <div id="theinputform" className='flex justify-center flex-auto flex-row p-3 items-center'>
        <Card color="transparent" shadow={false} >
          <Typography variant="h4" color="blue-gray">
            Hello Chikanda
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your hostel details.
          </Typography>
          <form className="mt-8 mb-1 ">
            <div className=" flex flex-col gap-4 ">
              <Input size="sm" label="Hostel Name" className="fill" />
              <div className="flex flex-row gap-10 ">
                <Radio name="type" label="male" />
                <Radio name="type" label="female" defaultChecked />
              </div>  
                <Input
                  label="minutes from campus"
                  type="number"
                  name="timeTaken"
                  min="1"
                  max="60"
                ></Input>       
              {/* add authontication world limit */}       
                <Textarea label="Description" placeholder="word limit" />
             
            </div>
            <hr />
            <Typography color="gray" className="mt-1 font-normal">
              Rooms.
            </Typography>
            <div className="flex my-4 items-center gap-4 ">
              <Input number="text" />
              <Input number="text" />
            </div>

            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    This information is True
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />

            <Button className="mt-6" fullWidth>
              Register
            </Button>
            {/* <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <a href="#" className="font-medium text-gray-900">
                Sign In
              </a>
            </Typography> */}
          </form>
        </Card>
      </div>
    </div>
  );
}

export default UserInputForm