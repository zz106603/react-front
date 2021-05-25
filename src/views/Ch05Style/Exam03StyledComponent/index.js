import Box from "./box";
import Button from "./button";

function Exam03StyledComponent(props) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          Exam03StyledComponent
        </div>
        <div className="card-body">
          <Box>
            Box 컴포넌트
          <Button>버튼</Button>
          <Button inverted={true}>버튼</Button>
          </Box>
        </div>
      </div>
    </>
  );
}

export default Exam03StyledComponent;