import {
  FormGroup,
  MenuItem,
  Box,
  Select,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@material-ui/core";

export const TableFilter = ({
  filterText,
  filterString,
  setFilterString,
  filter,
  setFilter,
}) => {
  return (
    <>
      <FormGroup className="formGroup" row>
        <Box m={3}>
          <Typography style={{ marginTop: "-15px" }}>Filtrar:</Typography>
        </Box>
        <Box>
          <input
            className="cleanInput"
            id="filter-input"
            value={filterString}
            onChange={(e) => setFilterString(e.target.value)}
          />
        </Box>
        <Box>
          <FormControlLabel
            style={{ margin: "0px 40px" }}
            control={
              <Checkbox
                checked={Boolean(filter)}
                onChange={(e) => setFilter(Boolean(e.target.checked))}
              />
            }
            label={filterText}
          />
        </Box>
      </FormGroup>
    </>
  );
};

export default TableFilter;
